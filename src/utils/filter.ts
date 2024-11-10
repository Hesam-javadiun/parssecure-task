class FilterHelper {
  filterList<T>(searchTerm: string, list: T[]): T[] {

    return list.filter((item: unknown) => {
      if (typeof item !== "object" || item === null) {
        return false;
      }

      for (const value of Object.values(item)) {
        return value.toLowerCase().indexOf(searchTerm) > -1;
      }
    });
  }
}

export default FilterHelper;
