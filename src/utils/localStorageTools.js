const saveInLocalStorage = (tag, data) => {
    localStorage.setItem(tag, JSON.stringify(data));
};

const clearLocalStorageByTag = (tag) => {
    localStorage.removeItem(tag)
};

export {saveInLocalStorage};
export {clearLocalStorageByTag};