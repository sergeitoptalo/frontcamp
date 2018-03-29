import controller from './main-page.controller';
import { getMainPageTemplate } from './main-page.template';

const MainPageComponent = {
    bindings: {
       current: '<'
    },
    controller,
    template: getMainPageTemplate()
};

export default MainPageComponent;
