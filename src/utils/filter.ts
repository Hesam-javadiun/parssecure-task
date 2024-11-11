class Filter {
  filterList<T>(searchTerm: string, list: T[]): T[] {
    return list.filter((item: unknown) => {
      for (const value of Object.values(item as object)) {
        if (value.toString().toLowerCase().indexOf(searchTerm.trim()) > -1)
          return true;
      }
    });
  }
}

export default Filter;
