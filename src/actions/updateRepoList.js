export const updateRepoList = (repoInfo) => {
    return {
        type : "REPO_LIST_UPDATE",
        payload : repoInfo
    }
}