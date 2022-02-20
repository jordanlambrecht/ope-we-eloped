////////////
// MONDAY
////////////
const MondayBoard = process.env.NEXT_PUBLIC_API_MONDAY_BOARD_RSVP
const MondayAuth = process.env.NEXT_PUBLIC_API_MONDAY_AUTH

export async function SendToMonday(data, firstguest_attending, secondguest_attending, count) {
  let test = 0
  if (firstguest_attending && secondguest_attending) {
    test = count + 1
  } else if (firstguest_attending === true && secondguest_attending === false) {
    test = 1
  } else {
    test = 0
  }

  let additionalGuests,
    firstGuest = ''

  if (firstguest_attending === true) {
    firstGuest = 'Attending'
  } else if (firstguest_attending === false) {
    firstGuest = 'Not Attending'
  }

  if (secondguest_attending === true) {
    additionalGuests = 'Yes'
  } else if (secondguest_attending === false) {
    additionalGuests = 'No'
  }

  console.log('test: ', test)
  console.log('first guest: ', firstguest_attending, ' ', data.firstguest_attending)

  console.log('second guest: ', secondguest_attending)
  const query = `mutation ($guest: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard}, item_name:$guest, column_values:$columnVals) { id } }`
  const vars = {
    guest: data.firstguest_name,
    columnVals: JSON.stringify({
      status: firstGuest,
      status1: additionalGuests,
      text46: data.firstguest_address,
      text0: data.firstguest_phone,
      text1: data.firstguest_email,
      text461: data.guest2,
      text6: data.guest3,
      text8: data.guest4,
      text7: data.guest5,
      text04: data.guest6,
      text74: data.guest7,
      text5: data.guest8,
      text17: data.guest9,
      text3: data.guest10,
      numbers: test,
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
