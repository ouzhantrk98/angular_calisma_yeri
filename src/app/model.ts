export class Model {

  user;
  items;

  constructor() {

    this.user = "Çınar";
    this.items = [
      new toDoItem("Kahvaltı", false),
      new toDoItem("Yemek", false),
      new toDoItem("Spor", false),
      new toDoItem("Ders Çalış", true)
    ]
  }

}

export class toDoItem {
  description;
  action;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
