import Component from "./core/Component.js";

export default class App extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
    }

    template() {
        return `
            <div class='app'>
                <div class='container'>
                    Shopping Mall!
                </div>
            </div>
        `;
    }
}
