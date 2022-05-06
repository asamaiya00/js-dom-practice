const data = [
  {
    id: 1,
    text: 'comment 1',
    replies: [
      {
        id: 2,
        text: 'reply 2',
        replies: [
          {
            id: 6,
            text: 'reply 6',
          },
          {
            id: 7,
            text: 'reply 7',
          },
        ],
      },
      {
        id: 3,
        text: 'reply 3',
      },
      {
        id: 4,
        text: 'reply 4',
        replies: [
          {
            id: 2,
            text: 'reply 2',
          },
          {
            id: 3,
            text: 'reply 3',
          },
        ],
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

function appendReplies(data, element) {
  data.forEach((comment) => {
    console.log(comment);
    if (comment.text) {
      const text = document.createElement('p');
      text.innerText = comment.text;
      text.addEventListener('click', (e) => {
        if (e.target.nextElementSibling.tagName === 'DIV')
          e.target.nextElementSibling.classList.toggle('hide');
      });
      element.appendChild(text);
    }
    if (comment?.replies?.length) {
      const div = document.createElement('div');
      appendReplies(comment.replies, div);
      element.appendChild(div);
    }
  });
}
appendReplies(data, commentsBox);
