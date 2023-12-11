const todoItem = {
  // входные параметры для компонента
  props: ["todo", "index"],
  emits: ["complete-todo"],
  methods: {
    makeComplete() {
      this.$emit("complete-todo");
    },
  },
  //   шаблон компонента
  template: `
    <div>
      {{todo.title}}
      <input type="checkbox" :checked="todo.completed" v-on:click="makeComplete">
    </div>

  `,
};
const app = Vue.createApp({
  data() {
    return {
      todoList: [
        {
          title: "первая задача",
          completed: false,
          noActive: false,
          id: 1,
        },
        {
          title: "вторая задача",
          completed: true,
          noActive: false,
          id: 2,
        },
      ],
    };
  },
  components: {
    "todo-item": todoItem,
  },
  methods: {
    makeComplete(index) {
      this.todoList[index].completed = !this.todoList[index].completed;
    },
    add() {
      if (!this.itemForAdd.trim()) {
        return;
      }
      this.todoList.push({
        title: this.itemForAdd,
        completed: false,
        noActive: false,
        id: this.todoList.length + 1,
      });
      // добавил очистку поля ввода
      this.itemForAdd = "";
    },
    del(index) {
      this.todoList.splice(index, 1);
    },
    filter1() {
      this.todoList.forEach((element) => {
        if (element.completed == false) {
          element.noActive = true;
        } else {
          element.noActive = false;
        }
      });
    },
    filter2() {
      this.todoList.forEach((element) => {
        if (element.completed == true) {
          element.noActive = true;
        } else {
          element.noActive = false;
        }
      });
    },
    filter3() {
      this.todoList.forEach((element) => {
        element.noActive = false;
      });
    },
    sort0() {
      this.todoList = this.todoList.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
    },
    sort1() {
      this.todoList = this.todoList.sort((a, b) =>
        a.title < b.title ? 1 : -1
      );
    },
    sort2() {
      this.todoList = this.todoList.sort((a, b) => (a.id < b.id ? 1 : -1));
    },
    sort3() {
      this.todoList = this.todoList.sort((a, b) => (a.id > b.id ? 1 : -1));
    }, // добавил метод для корректного удаления
    onclickItem(index) {
      this.index = index;
    },
  },
  mounted() {
    /* умею и этим способом комментировать, просто через Ctrl+/ быстрее :) */
    // fetch("https://jsonplaceholder.typicode.com/todos/")
    //   .then((response) => response.json())
    //   .then((json) => (this.todoList = json));
  },
});
app.mount("#app");

/* создание компонента глобально
// создаём объект-приложение vue.js
const app = Vue.createApp({});
// создаём компонент
// первый параметр - название компонента
// второй параметр - объект со свойствами шаблона
app.component("counter", {
  // свойства компонента
  data() {
    return {
      count: 0,
    };
  },
  //   методы компонента
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    console() {
      console.log(this.count);
    },
  },
  //   шаблон компонента
  template: `
        <h2> Счётчик </h2>
        <p> {{count}} </p>
        <button v-on:click="increase">Увеличить</button>
        <button v-on:click="decrease">Уменьшить</button>
        <button v-on:click="console">Консоль</button>
    `,
});
// связываем приложение Vue.js с компонентом на странице по id
app.mount("#app");
*/
