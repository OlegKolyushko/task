let data = {
  columns: [
    {
      code: "Острів",
      name: "Острів",
      viewState: 0,
      isFileContent: false,
      isFileName: false,
      isPrintable: true,
      hint: "",
      dataType: "Text",
    },
    {
      code: "Локація",
      name: "Локація",
      viewState: 0,
      isFileContent: false,
      isFileName: false,
      isPrintable: true,
      hint: "",
      dataType: "Text",
    },
    {
      code: "Текст",
      name: "Текст",
      viewState: 0,
      isFileContent: false,
      isFileName: false,
      isPrintable: true,
      hint: "",
      dataType: "Text",
    },
    {
      code: "Дата",
      name: "Дата",
      viewState: 0,
      isFileContent: false,
      isFileName: false,
      isPrintable: true,
      hint: "",
      dataType: "DateTime",
    },
    {
      code: "Коментар",
      name: "Коментар",
      viewState: 0,
      isFileContent: false,
      isFileName: false,
      isPrintable: true,
      hint: "",
      dataType: "Text",
    },
  ],
  rows: [
    {
      values: [
        "Труханов",
        "Київ",
        " столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.",
        "2020-12-12T00:00:00",
        "Тестове",
      ],
    },
  ],
};
const ulContainer = document.querySelector(".container");

function createBlock(obj) {
  for (let i = 0; i <= 5; i++) {
    const objColumn = obj.columns[0 + i];
    let content = obj.rows[0].values[0 + i];
    if (objColumn.dataType === "DateTime") {
      const time = new Date(content);
      const month = time.getUTCMonth() + 1;
      const day = time.getUTCDate();
      const year = time.getUTCFullYear();
      content = `${day}.${month}.${year}`;
    }
    ulContainer.insertAdjacentHTML(
      "beforeend",
      `<li>
    <h2>${objColumn.name}</h2>
    <p >${content}</p>
    </li>`
    );
  }
}

createBlock(data);

// style=${content.length > 100? 'margin-top:300px' : null }