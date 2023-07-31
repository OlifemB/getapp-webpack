import React from 'react';
import useStore from "@/libs/hooks/useStore";

const App = () => {
    const {users, boards} = useStore()


    return (
        <div>
            Ready
        </div>
    );
};

export default App;