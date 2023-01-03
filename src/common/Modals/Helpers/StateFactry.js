export default function StateFactory( options ){
let defaultState = {
        taskData: {
            status:null,
            assignee: null,
            label: null,
            description:null,
            title: null
        },
        taskConfig: {}
    }
    return defaultState;
}
