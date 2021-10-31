const senderdata = [
  {
    num: 1,
    receiver: "당근당근",
    content: "당근당근의 마켓에 대해 문의드립니다",
    date: "2021-10-16",
    read: "O",
  },
  {
    num: 2,
    receiver: "효효",
    content: "효효님의 무야호에 대해 문의드립니다",
    date: "2021-10-13",
    read: "O",
  },
  {
    num: 3,
    receiver: "도도",
    content: "도도님의 제주살이에 대해 문의드립니다",
    date: "2021-10-10",
    read: "O",
  },
  {
    num: 4,
    receiver: "지원",
    content: "오늘밤  8시에  숭실대에서  직거래  가능하세요?",
    date: "2021-10-06",
    read: "X",
  },
  {
    num: 5,
    receiver: "혜니",
    content: "혜니님의 ootd에 대해 문의드립니다",
    date: "2021-10-01",
    read: "O",
  },
];

const getSenderInboxByNum = (num) => {
  const array = senderdata.filter((x) => x.num == num);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { senderdata, getSenderInboxByNum };
