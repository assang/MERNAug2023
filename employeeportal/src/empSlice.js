import { createSlice } from "@reduxjs/toolkit";

const empSlice = createSlice({
    name: 'empSlice',
    initialState: {
        employees: []
    },
    reducers: {
        setEmployees: (state, emplList) => {
            state.employees = [...emplList.payload]
        },
        editSingleEmp: (state, empEdit) => {
            // state.employees = [{id:1}, {id:2}] 
            state.employees.filter((emp,i) => {
                if(emp.id === empEdit.payload.id)
                {
                    state.employees[i] = empEdit.payload
                    // emp.username = empEdit.payload.username
                    // emp.email = empEdit.payload.email
                }
            })
        }
    }
})

export const {setEmployees, editSingleEmp} = empSlice.actions;

export default empSlice.reducer;