export default function StateFactory( options ){
let defaultState = {
        taskData: {
            status:null,
            assignee: null,
            label: null,
            description:null,
            name: null
        },
        taskConfig: {}
    }
    return defaultState;
}
