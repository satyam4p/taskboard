
export default (({props)=>{
    return {
        Settings:(width=15, color= '123E2C')=>{
            return <img src={'https://img.icons8.com/windows/' + width + '/' + color + '/settings--v1.png'}/>
        },

        Board:(width=15, color='123E2C')=>{
            return <img src={'https://img.icons8.com/fluency-systems-regular/' + width + '/' + color + '/noticeboard.png'}/>
        },
        RecentTasks:(width=15, color='123E2C')=>{
            return <img src={'https://img.icons8.com/fluency-systems-regular/' + width + '/' + color + '/task.png'}/>
        },
        Archive:(width=15, color='123E2C')=>{
            return <img src={'https://img.icons8.com/fluency-systems-regular/' + width + '/' + color + '/archive.png'}/>
        }

    }
})();