// 1.连接数据库
const dbRequest = indexedDB.open("hx");
dbRequest.onerror = function (err) {
  console.log("err:", err);
};
// 通过db获取数据
let db = null;
dbRequest.onsuccess = function (event) {
  db = event.target.result;
};
// 第一次打开或者数据库版本升级会调用
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;
  // 创建一些存储对象
  db.createObjectStore("users", { keyPath: "id" });
};

class Users {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}
const usersInfo = [
  new Users("aaa", 11, 111),
  new Users("bbb", 22, 222),
  new Users("ccc", 33, 333),
];
const btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    const transaction = db.transaction("users", "readwrite");
    const store = transaction.objectStore("users");
    switch (i) {
      case 0:
        console.log("add");
        for (const user of usersInfo) {
          const addRequest = store.add(user);
          addRequest.onsuccess = function () {
            console.log(`${user.name}插入成功`);
          };
        }
        transaction.oncomplete = function () {
          console.log("all add success");
        };
        break;
      case 1:
        console.log("query");
        // 1.知道主键keyPath，根据主键查询
        // const queryRequest = store.get(222);
        // queryRequest.onsuccess = function (event) {
        //   console.log("查询成功", event.target.result);
        // };
        // 2.遍历进行查询
        const queryRequest = store.openCursor();
        queryRequest.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.value.name === "bbb") {
              console.log(cursor.key, cursor.value);
              console.log("query success");
            } else {
              cursor.continue();
            }
          }
        };
        break;
      case 2:
        console.log("delete");
        const deleteRequest = store.openCursor();
        deleteRequest.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 333) {
              cursor.delete();// 删除游标对应的数据
              console.log("delete success");
            } else {
              cursor.continue();
            }
          }
        };
        break;
      case 3:
        console.log("update");
        const updateRequest = store.openCursor();
        // 创建游标成功时的回调
        updateRequest.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 111) {
              const value = cursor.value;
              value.name = "new name";
              cursor.update(value);// 更新游标对应的数据
              console.log("update success");
            } else {
              cursor.continue();
            }
          }
        };
        break;
    }
  };
}
