import {INodeGroup} from "@alchemist-editor/core";
import {EditorState} from "@/stores/modules/editor/editor-state";

export class EditorGetters
{
    public selectedGroup = (state: EditorState, getters: any, rootState: any): INodeGroup =>
    {
        if(rootState.project.activeProject == null) { return null; }

        const activeProject = rootState.project.activeProject;
        const selectedIndex = state.selectedGroupIndex;
        if(activeProject.nodeGroups.length <= selectedIndex)
        { return null;}

        return activeProject.nodeGroups[selectedIndex];
    };

    public getNodeErrors = (state: EditorState) =>
    {
        return (nodeId: string) => {
            if(state.nodeErrors.hasOwnProperty(nodeId)) {
                return state.nodeErrors[nodeId];
            }
            return {};
        }
    };
}