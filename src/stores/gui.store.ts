import {
    autorun,
    IReactionDisposer,
    makeAutoObservable,
    toJS
} from 'mobx';
import { RootStore } from "./root.store";

class GuiStore {
    _counter = 1
    private disposer: IReactionDisposer;
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeAutoObservable ( this )
        this.disposer = autorun ( () => {
            console.log ( '[R][disposer1]', this._counter * 10 )
        } )
    }

    increment() {
        this._counter++
    }

    decrement() {
        this._counter--
    }

    reset() {
        this._counter = 0
    }

    get counter() {
        return toJS ( this._counter )
    }

    dispose() {
        this.disposer ()
    }
}

export default GuiStore;
