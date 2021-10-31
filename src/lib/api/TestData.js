const inboxdata = [
  {
    num: 1,
    sender: "혜니",
    content: "문의드립니다",
    date: "2021-10-16",
    read: "X",
  },
  {
    num: 2,
    sender: "효효",
    content: "블록옵션님의 버즈에 대해 문의드립니다",
    date: "2021-10-13",
    read: "O",
  },
  {
    num: 3,
    sender: "도도",
    content: "블록옵션님의 그램에 대해 문의드립니다",
    date: "2021-10-10",
    read: "O",
  },
  {
    num: 4,
    sender: "도영",
    content: "오늘밤  8시에  숭실대에서  직거래  가능하세요?",
    date: "2021-10-06",
    read: "X",
  },
  {
    num: 5,
    sender: "초코치킨",
    content: "초코치킨님의 민트초코에 대해 문의드립니다",
    date: "2021-10-01",
    read: "O",
  },
];

const getInboxByNum = (num) => {
  const array = inboxdata.filter((x) => x.num == num);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { inboxdata, getInboxByNum };
