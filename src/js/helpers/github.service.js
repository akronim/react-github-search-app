import fetcher from "./fetcher";

export const gitHubService = {
  get,
};

function get(url, successCallback) {
  const requestOptions = {
    method: "GET",
  };

  return fetcher.fetchCall(url, requestOptions, successCallback);
}

export default gitHubService;
