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
        // console.log(e.target);
        if (
          e.target.tagName === 'P' &&
          e.target.nextElementSibling.tagName === 'DIV'
        )
          e.target.nextElementSibling.classList.toggle('hide');
      });
      const input = document.createElement('input');
      input.type = 'text';
      text.appendChild(input);
      const ID = Math.floor(Math.random() * 100000);
      text.id = ID;
      const btn = document.createElement('button');
      btn.innerText = 'Add Reply';
      btn.addEventListener('click', (e) => {
        console.log(comment.replies);
        console.log(element.innerHTML);
        if (!comment.replies) {
          comment.replies = [];
          const div = document.createElement('div');
          appendReplies(comment.replies, div);
          element.appendChild(div);
        }
        comment.replies.push({
          id: ID,
          text: input.value,
          replies: [],
        });
        const div =
          element.querySelector('div') || document.createElement('div');
        appendReply(comment.replies.at(-1), div);
        // appendReplies(comment.replies, div);
        console.log(comment.replies);
        // console.log(element.querySelector('div'));
      });
      text.appendChild(btn);
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

function appendReply(comment, element) {
  console.log(element);
  const text = document.createElement('p');
  text.innerText = comment.text;
  text.addEventListener('click', (e) => {
    // console.log(e.target);
    if (
      e.target.tagName === 'P' &&
      e.target.nextElementSibling.tagName === 'DIV'
    )
      e.target.nextElementSibling.classList.toggle('hide');
  });
  const input = document.createElement('input');
  input.type = 'text';
  text.appendChild(input);
  const ID = Math.floor(Math.random() * 100000);
  text.id = ID;
  const btn = document.createElement('button');
  btn.innerText = 'Add Reply';
  btn.addEventListener('click', (e) => {
    console.log(comment.replies);
    console.log(element.innerHTML);
    if (!comment.replies) {
      comment.replies = [];
      const div = document.createElement('div');
      appendReplies(comment.replies, div);
      element.appendChild(div);
    }
    comment.replies.push({
      id: ID,
      text: input.value,
      replies: [],
    });
    const div = element.querySelector('div') || document.createElement('div');
    appendReply(comment.replies.at(-1), div);
    // appendReplies(comment.replies, div);
    console.log(comment.replies);
    // console.log(element.querySelector('div'));
  });
  text.appendChild(btn);
  element.appendChild(text);
}
