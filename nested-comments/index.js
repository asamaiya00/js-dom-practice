const data = [
  {
    id: 1,
    text: 'comment 1',
    replies: [
      {
        id: 2,
        text: 'reply 2',
      },
      {
        id: 3,
        text: 'reply 3',
      },
      {
        id: 4,
        text: 'reply 4',
      },
    ],
  },
  {
    id: 5,
    text: 'comment 5',
    replies: [],
  },
];

const commentsBox = document.querySelector('#comments-box');

function appendReplies(data) {
  data.forEach((comment) => {
    console.log(comment);
    if (comment.text) commentsBox.innerHTML += `<p>${comment.text}</p>`;
    if (comment?.replies?.length) appendReplies(comment.replies);
  });
}
appendReplies(data);
