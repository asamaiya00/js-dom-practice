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
            replies: [],
          },
          {
            id: 7,
            text: 'reply 7',
            replies: [],
          },
        ],
      },
      {
        id: 3,
        text: 'reply 3',
        replies: [],
      },
      {
        id: 4,
        text: 'reply 4',
        replies: [
          {
            id: 9,
            text: 'reply 9',
            replies: [],
          },
          {
            id: 10,
            text: 'reply 10',
            replies: [],
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
      const commentContainer = document.createElement('div');
      commentContainer.id = 'comments-' + comment.id;
      const text = document.createElement('p');
      text.innerText = comment.text;
      text.addEventListener('click', toggleReplies);
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'input-' + comment.id;
      text.appendChild(input);
      const btn = document.createElement('button');
      btn.innerText = 'Add Reply';
      btn.addEventListener('click', () =>
        handleClick(element, comment, input.value)
      );
      text.appendChild(btn);
      commentContainer.appendChild(text);
      const div = document.createElement('div');
      div.id = 'replies-' + comment.id;
      appendReplies(comment.replies, div);
      commentContainer.appendChild(div);
      element.appendChild(commentContainer);
    }
  });
}
appendReplies(data, commentsBox);

function appendReply(comment, element) {
  console.log(element);
  const commentContainer =
    document.getElementById('replies-' + comment.id) ||
    document.createElement('div');
  console.log('commentContainer', commentContainer);
  commentContainer.id = 'replies-' + comment.id;
  const text = document.createElement('p');
  text.innerText = comment.text;
  text.addEventListener('click', toggleReplies);
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'input-' + comment.id;
  text.appendChild(input);
  const btn = document.createElement('button');
  btn.innerText = 'Add Reply';
  btn.addEventListener('click', () =>
    handleClick(element, comment, input.value)
  );
  text.appendChild(btn);
  commentContainer.appendChild(text);
  element.appendChild(commentContainer);
}

function handleClick(element, comment, text) {
  console.log(element.innerHTML);
  if (!comment.replies) {
    comment.replies = [];
    const div = document.createElement('div');
    div.id = 'replies-' + comment.id;
    console.log(document.getElementById(comment.id));
    document.getElementById('replies-' + comment.id).after(div);
  }
  console.log(comment.replies);
  comment.replies.push({
    id: comment.id,
    text,
    replies: [],
  });
  console.log(element, comment.id);
  const div = document.getElementById('replies-' + comment.id);
  console.log('div', div);
  appendReply(comment.replies.at(-1), div);
  element.appendChild(div);
  // appendReplies(comment.replies, div);
  console.log(comment.replies);
  console.log(element.getElementById('input-' + comment.id).value);
}

function toggleReplies(e) {
  if (e.target.tagName === 'P' && e.target.nextElementSibling.tagName === 'DIV')
    e.target.nextElementSibling.classList.toggle('hide');
}
