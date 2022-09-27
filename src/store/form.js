export default {
  state: {
    formData: [
      {
        id: "",
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
    confirmItem(state, data) {
      state.formData.push(data);
    },
    deleteItem(state, data) {
      const index = state.formData.findIndex(
        (element) => element.id === data.id
      );
      state.formData.splice(index, 1);
    },
    editItem(state, data) {
      const index = state.formData.findIndex(
        (element) => element.id === data.id
      );
      state.formData[index] = data;
    },
  },
};
