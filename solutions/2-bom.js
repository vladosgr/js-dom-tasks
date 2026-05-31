// BEGIN
export default function solution(url) {
  window.location.href = url;
  const browserCodeName = navigator.appCodeName;
  const browserVersion = navigator.appVersion.split(' ')[0];
  const currentUrl = window.location.href;
  return `${browserCodeName}/${browserVersion} ${currentUrl}`;
}
// END