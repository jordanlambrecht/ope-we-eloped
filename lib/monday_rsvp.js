////////////
// MONDAY
////////////
const MondayBoard = process.env.NEXT_PUBLIC_API_MONDAY_BOARD_RSVP
const MondayAuth = process.env.NEXT_PUBLIC_API_MONDAY_AUTH

export async function SendToMonday(data, firstguest_attending, secondguest_attending) {
  let test
  let guestCount

  if (secondguest_attending === true) {
    test = 'Yes'
    guestCount = 2
  } else if (secondguest_attending === false) {
    test = 'No'
    guestCount = 1
  }

  if (firstguest_attending) {
    firstguest_attending = 'Attending'
  } else {
    firstguest_attending = 'Not Attending'
  }

  console.log('first guest: ', firstguest_attending, ' ', data.firstguest_attending)

  console.log('second guest: ', secondguest_attending)
  const query = `mutation ($guest: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard}, item_name:$guest, column_values:$columnVals) { id } }`
  const vars = {
    guest: data.firstguest_name,
    columnVals: JSON.stringify({
      status: firstguest_attending,
      status1: test,
      text46: data.firstguest_address,
      text0: data.firstguest_phone,
      text1: data.firstguest_email,
      text461: data.secondguest_name,
      text6: data.secondguest_address,
      text8: data.secondguest_phone,
      text7: data.secondGuest_email,
      numbers: guestCount,
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query,
      variables: JSON.stringify(vars),
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res, null, 2)))
}
