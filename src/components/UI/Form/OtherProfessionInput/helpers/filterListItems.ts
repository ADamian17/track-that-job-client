const filterListItems = (
  items: [
    Queries.WpSpecialtyOptions_Professionsautosuggestion_autosuggestionList
  ],
  value: string,
  itemsMax: number
) => {
  const nodes =
    items &&
    items
      .filter(({ autosuggestionItem }) => {
        const tempStr = value?.toLowerCase();
        const currentStr = autosuggestionItem?.toLocaleLowerCase();

        return (
          tempStr && currentStr?.startsWith(tempStr) && currentStr !== tempStr
        );
      })
      .splice(0, itemsMax);

  return {
    nodes,
    nodesLen: nodes.length,
  };
};

export default filterListItems;
