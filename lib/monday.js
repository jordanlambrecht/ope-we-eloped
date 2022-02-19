////////////
// MONDAY
////////////
const MondayBoard = process.env.NEXT_PUBLIC_API_MONDAY_BOARD_STORIES
const MondayAuth = process.env.NEXT_PUBLIC_API_MONDAY_AUTH

export async function SendToMonday(data) {
  let author = 'anonymous'
  if (data.author != '') {
    author = data.author
  }
  const query = `mutation ($name: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard}, item_name:$name, column_values:$columnVals) { id } }`
  const vars = {
    name: data.title,
    columnVals: JSON.stringify({
      text: author,
      long_text: { text: data.story },
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
