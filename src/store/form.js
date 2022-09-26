export default {
  state: {
    formData: [
      {
        name: "Mobile Expense Process",
        justification: "Make the approval process ore easier",
        isOpen: "No",
        leader: "Leader XXX",
        member: "XXX",
        member1: "XXX",
        member2: "XXX",
        member3: "XXX",
        member4: "",
        member5: "",
      },
    ],
  },
  mutations: {
    confirmForm(state, data) {
      state.formData.push(data)
    },
    deleteItem(state, data) {
      state.formData.forEach((element, index) => {
        if (element === data) {
          state.formData.splice(index - 1, 1)
        }
      });
    }
  },
};
