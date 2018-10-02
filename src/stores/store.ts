import Vue from 'vue';
import Vuex from 'vuex';
import {EditorState} from "@/stores/modules/editor/editor-state";
import {EditorMutations} from "@/stores/modules/editor/editor-mutations";
import {EditorGetters} from "@/stores/modules/editor/editor-getters";
import {ProjectState, ProjectMutations, ProjectGetters} from "@alchemist-editor/core";

Vue.use(Vuex);

const editorModule = {
    state: new EditorState(),
    mutations: <any>new EditorMutations(),
    getters: <any>new EditorGetters()
};

const projectModule = {
    state: new ProjectState(),
    mutations: <any>new ProjectMutations(),
    getters: <any>new ProjectGetters()
};

const storeOptions = {
    modules: {
        editor: editorModule,
        project: projectModule
    }
};

export default new Vuex.Store(storeOptions);