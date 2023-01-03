export const useListActions = (items) => {
  const addItem = (item) => {
    items.value.push(item);
  };
  const deleteItem = (id) => {
    const index = items.value.findIndex((item) => item.id === id);

    index >= 0 && items.value.splice(index, 1);
  };

  return {
    addItem,
    deleteItem,
  };
}
