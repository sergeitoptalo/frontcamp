import controller from './main-page.controller';
import { getMainPageTemplate } from './main-page.template';

const MainPageComponent = { 
  /* bindings: {
    todoData: '<'
  }, */
  controller,
  //templateUrl: 'app/components/main-page/main-page.template.html'
 /*  template: `
    <div class="todo">
      <todo-form
        todo="$ctrl.newTodo"
        on-add-todo="$ctrl.addTodo($event);">
      </todo-form>
      <new-todos
        todos="$ctrl.todos"></new-todos>
    </div>
  ` */
  template: getMainPageTemplate()
};

export default MainPageComponent;
