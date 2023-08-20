import * as React from 'react';

const defaultStyle = {
  width: 283,
  height: 93,
  maxWidth: '100%',
} as React.CSSProperties;

const PoonjiTitle = ({ style = {}, className }: { style?: React.CSSProperties; className?: string } = {}) => (
  <div style={{ ...defaultStyle, ...style }} className={className}>
    <svg width="100%" height="100%" preserveAspectRatio="xMinYMin" viewBox="0 0 215 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.739 37.6536C46.739 40.8723 45.9894 43.8829 44.4903 46.6855C42.9911 49.4882 40.9408 51.6996 38.3393 53.3199C35.7598 54.9402 32.8938 55.7503 29.7411 55.7503C25.0893 55.7503 21.0217 53.9768 17.5384 50.4297V64.1582H24.3177V70.2013H4.40967V64.1582H10.6929V26.2899H4.87265V20.2138H17.5384V25.7315C19.258 23.7171 21.154 22.2173 23.2264 21.232C25.2988 20.2467 27.5144 19.754 29.8734 19.754C33.1583 19.754 36.0795 20.5642 38.6369 22.1844C41.1943 23.7828 43.1785 25.9505 44.5895 28.6874C46.0225 31.4244 46.739 34.4131 46.739 37.6536ZM29.6419 49.5429C31.5379 49.5429 33.2465 48.9955 34.7677 47.9007C36.289 46.806 37.4795 45.3171 38.3393 43.4341C39.1991 41.551 39.629 39.5585 39.629 37.4566C39.629 35.3327 39.155 33.384 38.207 31.6105C37.259 29.815 35.9583 28.3918 34.3048 27.3408C32.6513 26.268 30.7883 25.7315 28.716 25.7315C26.5554 25.7315 24.6153 26.3008 22.8957 27.4394C21.1761 28.556 19.8422 30.0449 18.8942 31.9061C17.9462 33.7672 17.4722 35.8144 17.4722 38.0478C17.4722 41.6386 18.6076 44.4522 20.8784 46.4885C23.1713 48.5248 26.0924 49.5429 29.6419 49.5429Z" fill="#52D998" />
      <path d="M88.3739 37.5223C88.3739 40.8723 87.5692 43.9377 85.9598 46.7184C84.3504 49.4991 82.1568 51.6996 79.3789 53.3199C76.601 54.9402 73.5256 55.7503 70.1524 55.7503C66.6691 55.7503 63.5274 54.9402 60.7275 53.3199C57.9276 51.6996 55.745 49.4991 54.1797 46.7184C52.6365 43.9377 51.8648 40.8723 51.8648 37.5223C51.8648 34.019 52.6365 30.8879 54.1797 28.1291C55.745 25.3702 57.9166 23.2135 60.6945 21.6589C63.4723 20.0825 66.625 19.2942 70.1524 19.2942C73.5696 19.2942 76.6672 20.1263 79.445 21.7903C82.2229 23.4325 84.4055 25.6439 85.9929 28.4247C87.5802 31.2054 88.3739 34.2379 88.3739 37.5223ZM70.1524 49.1488C72.1807 49.1488 74.0436 48.6233 75.7412 47.5723C77.4388 46.5213 78.7616 45.1091 79.7096 43.3355C80.6576 41.562 81.1316 39.6242 81.1316 37.5223C81.1316 35.4641 80.6576 33.5482 79.7096 31.7747C78.7616 30.0011 77.4388 28.5779 75.7412 27.5051C74.0436 26.4103 72.1587 25.8629 70.0863 25.8629C68.058 25.8629 66.1951 26.3993 64.4975 27.4722C62.7999 28.5232 61.4661 29.9464 60.4961 31.7418C59.526 33.5373 59.041 35.4641 59.041 37.5223C59.041 39.5804 59.526 41.5073 60.4961 43.3027C61.4661 45.0981 62.8109 46.5213 64.5306 47.5723C66.2502 48.6233 68.1242 49.1488 70.1524 49.1488Z" fill="#52D998" />
      <path d="M130.042 37.5223C130.042 40.8723 129.237 43.9377 127.628 46.7184C126.018 49.4991 123.825 51.6996 121.047 53.3199C118.269 54.9402 115.194 55.7503 111.82 55.7503C108.337 55.7503 105.195 54.9402 102.395 53.3199C99.5956 51.6996 97.413 49.4991 95.8477 46.7184C94.3044 43.9377 93.5328 40.8723 93.5328 37.5223C93.5328 34.019 94.3044 30.8879 95.8477 28.1291C97.413 25.3702 99.5846 23.2135 102.362 21.6589C105.14 20.0825 108.293 19.2942 111.82 19.2942C115.238 19.2942 118.335 20.1263 121.113 21.7903C123.891 23.4325 126.073 25.6439 127.661 28.4247C129.248 31.2054 130.042 34.2379 130.042 37.5223ZM111.82 49.1488C113.849 49.1488 115.712 48.6233 117.409 47.5723C119.107 46.5213 120.43 45.1091 121.378 43.3355C122.326 41.562 122.8 39.6242 122.8 37.5223C122.8 35.4641 122.326 33.5482 121.378 31.7747C120.43 30.0011 119.107 28.5779 117.409 27.5051C115.712 26.4103 113.827 25.8629 111.754 25.8629C109.726 25.8629 107.863 26.3993 106.165 27.4722C104.468 28.5232 103.134 29.9464 102.164 31.7418C101.194 33.5373 100.709 35.4641 100.709 37.5223C100.709 39.5804 101.194 41.5073 102.164 43.3027C103.134 45.0981 104.479 46.5213 106.199 47.5723C107.918 48.6233 109.792 49.1488 111.82 49.1488Z" fill="#52D998" />
      <path d="M168.304 31.5119V48.689H174.124V54.7322H161.458V31.9389C161.458 29.7712 161.138 28.2167 160.499 27.2752C159.882 26.3336 158.857 25.8629 157.424 25.8629C154.381 25.8629 150.964 27.3518 147.172 30.3296V48.689H153.158V54.7322H134.308V48.689H140.426V26.2899H134.308V20.2138H147.172V24.3849C151.427 21.2977 155.428 19.754 159.176 19.754C162.285 19.754 164.578 20.7065 166.055 22.6114C167.554 24.5163 168.304 27.4832 168.304 31.5119Z" fill="#52D998" />
      <path d="M189.567 8.58732C189.567 9.70399 189.16 10.6674 188.344 11.4775C187.528 12.2877 186.558 12.6927 185.434 12.6927C184.309 12.6927 183.35 12.2877 182.557 11.4775C181.763 10.6674 181.366 9.70399 181.366 8.58732C181.366 7.47064 181.763 6.50724 182.557 5.69711C183.35 4.88697 184.309 4.4819 185.434 4.4819C186.602 4.4819 187.583 4.87602 188.377 5.66426C189.171 6.4525 189.567 7.42685 189.567 8.58732ZM176.836 69.8729C175.204 69.8729 173.826 69.7634 172.702 69.5445V63.4028C173.782 63.5342 174.94 63.5998 176.174 63.5998C178.004 63.5998 179.327 63.3261 180.143 62.7788C180.958 62.2533 181.521 61.3446 181.829 60.0528C182.16 58.7828 182.325 56.7575 182.325 53.9768V26.2899H176.902V20.2138H189.171V51.7763C189.171 56.3962 188.928 59.8776 188.443 62.2204C187.98 64.5851 186.867 66.4463 185.103 67.8038C183.339 69.1832 180.584 69.8729 176.836 69.8729Z" fill="#52D998" />
      <path d="M209.277 8.58732C209.277 9.70399 208.869 10.6674 208.054 11.4775C207.238 12.2877 206.268 12.6927 205.143 12.6927C204.019 12.6927 203.06 12.2877 202.266 11.4775C201.473 10.6674 201.076 9.70399 201.076 8.58732C201.076 7.47064 201.473 6.50724 202.266 5.69711C203.06 4.88697 204.019 4.4819 205.143 4.4819C206.312 4.4819 207.293 4.87602 208.087 5.66426C208.88 6.4525 209.277 7.42685 209.277 8.58732ZM214.171 48.689V54.7322H196.611V48.689H202.035V26.2899H196.611V20.2138H208.88V48.689H214.171Z" fill="#52D998" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22.7997 60.5486C23.9686 60.5486 24.9162 61.4896 24.9162 62.6505V68.6937C24.9162 69.8546 23.9686 70.7957 22.7997 70.7957H2.89167C1.72278 70.7957 0.775208 69.8546 0.775208 68.6937V62.6505C0.775208 61.4896 1.72278 60.5486 2.89167 60.5486H7.05847V26.8842H3.35465C2.18576 26.8842 1.23818 25.9431 1.23818 24.7822V18.7062C1.23818 17.5453 2.18576 16.6042 3.35465 16.6042H16.0204C17.1893 16.6042 18.1369 17.5453 18.1369 18.7062V19.3994C18.9848 18.7926 19.8705 18.2677 20.7945 17.8284C23.1599 16.7038 25.6889 16.1444 28.3554 16.1444C32.0066 16.1444 35.3274 17.05 38.2517 18.9012C41.1346 20.7044 43.3735 23.156 44.9522 26.2157C46.548 29.2658 47.3375 32.5876 47.3375 36.146C47.3375 39.7034 46.5054 43.0533 44.8414 46.164C43.1764 49.2766 40.8762 51.767 37.9495 53.5907C35.0208 55.4295 31.7611 56.3446 28.2231 56.3446C24.5227 56.3446 21.1505 55.34 18.1369 53.3828V60.5486H22.7997ZM16.0204 48.922C16.7034 49.6176 17.4089 50.2449 18.1369 50.804C21.1214 53.0964 24.4835 54.2426 28.2231 54.2426C31.3758 54.2426 34.2418 53.4325 36.8213 51.8122C39.4228 50.192 41.4731 47.9805 42.9723 45.1779C44.4714 42.3753 45.221 39.3646 45.221 36.146C45.221 32.9054 44.5045 29.9167 43.0715 27.1798C41.6605 24.4428 39.6763 22.2752 37.1189 20.6768C34.5615 19.0565 31.6404 18.2464 28.3554 18.2464C25.9964 18.2464 23.7808 18.739 21.7084 19.7243C20.4532 20.3211 19.2627 21.1067 18.1369 22.081C17.4039 22.7153 16.6985 23.4296 16.0204 24.2239V18.7062H3.35465V24.7822H9.17494V62.6505H2.89167V68.6937H22.7997V62.6505H16.0204V48.922ZM34.8196 31.0884L34.8146 31.079C34.0304 29.5937 32.9769 28.4497 31.6459 27.6036L31.6292 27.5929C30.3373 26.7547 28.8805 26.3258 27.198 26.3258C25.4352 26.3258 23.9074 26.7831 22.5517 27.6807L22.5359 27.691C21.1343 28.6012 20.0491 29.8076 19.2648 31.3473C18.4771 32.8936 18.0707 34.6125 18.0707 36.5401C18.0707 39.6522 19.0324 41.8527 20.7751 43.4174C22.6201 45.0542 25.0117 45.9333 28.1239 45.9333C29.5783 45.9333 30.8514 45.5233 32.0079 44.691C33.2002 43.8329 34.1689 42.6457 34.8938 41.0583C35.6269 39.4526 35.9945 37.7566 35.9945 35.9489C35.9945 34.1483 35.596 32.5409 34.8196 31.0884ZM50.8144 46.2365L50.8082 46.2254C49.0829 43.1167 48.2304 39.6992 48.2304 36.0146C48.2304 32.1943 49.075 28.705 50.8116 25.6006L50.8179 25.5895C52.5719 22.498 55.0201 20.0659 58.1321 18.323C61.2604 16.5491 64.7798 15.6846 68.6344 15.6846C72.4132 15.6846 75.8904 16.6093 79.0146 18.4794C82.1045 20.3072 84.5475 22.7822 86.316 25.8804C88.089 28.9862 88.9724 32.3773 88.9724 36.0146C88.9724 39.7152 88.079 43.1444 86.2767 46.2582C84.4847 49.3546 82.0284 51.8191 78.9327 53.6247C75.8143 55.4436 72.3659 56.3446 68.6344 56.3446C64.8057 56.3446 61.2916 55.4499 58.144 53.6284C55.0205 51.8209 52.5664 49.3489 50.8144 46.2365ZM77.9271 20.2827C75.1492 18.6186 72.0517 17.7866 68.6344 17.7866C65.107 17.7866 61.9543 18.5748 59.1765 20.1513C56.3986 21.7059 54.227 23.8626 52.6617 26.6214C51.1185 29.3803 50.3468 32.5113 50.3468 36.0146C50.3468 39.3646 51.1185 42.43 52.6617 45.2107C54.227 47.9915 56.4096 50.192 59.2096 51.8122C62.0095 53.4325 65.1511 54.2426 68.6344 54.2426C72.0076 54.2426 75.0831 53.4325 77.8609 51.8122C80.6388 50.192 82.8324 47.9915 84.4418 45.2107C86.0512 42.43 86.8559 39.3646 86.8559 36.0146C86.8559 32.7303 86.0622 29.6978 84.4749 26.917C82.8875 24.1363 80.7049 21.9248 77.9271 20.2827ZM73.087 27.7708L73.0706 27.7603C71.7247 26.8924 70.2419 26.4572 68.5683 26.4572C66.9391 26.4572 65.4709 26.8815 64.1158 27.7379L64.0991 27.7483C62.7235 28.6 61.643 29.7474 60.843 31.228C60.0398 32.7147 59.6395 34.2996 59.6395 36.0146C59.6395 37.7296 60.0398 39.3146 60.843 40.8012C61.6393 42.2751 62.7258 43.4213 64.1218 44.2745C65.5063 45.1206 66.996 45.5392 68.6344 45.5392C70.2727 45.5392 71.7469 45.1209 73.1036 44.2809C74.4813 43.4279 75.5471 42.2925 76.3222 40.8423C77.1003 39.3866 77.4972 37.7896 77.4972 36.0146C77.4972 34.2911 77.1038 32.7148 76.3222 31.2526C75.545 29.7986 74.4741 28.6475 73.087 27.7708ZM92.4823 46.2365L92.4761 46.2254C90.7508 43.1167 89.8983 39.6992 89.8983 36.0146C89.8983 32.1943 90.743 28.705 92.4796 25.6006L92.4858 25.5895C94.2398 22.4982 96.6878 20.0661 99.7997 18.3233C102.928 16.5492 106.448 15.6846 110.302 15.6846C114.081 15.6846 117.559 16.6093 120.683 18.4797C123.773 20.3074 126.216 22.7824 127.984 25.8804C129.757 28.9862 130.64 32.3773 130.64 36.0146C130.64 39.7152 129.747 43.1444 127.945 46.2582C126.153 49.3546 123.696 51.8191 120.601 53.6247C117.482 55.4436 114.034 56.3446 110.302 56.3446C106.474 56.3446 102.96 55.4499 99.812 53.6284C96.6885 51.8209 94.2343 49.3489 92.4823 46.2365ZM119.595 20.2827C116.817 18.6186 113.72 17.7866 110.302 17.7866C106.775 17.7866 103.622 18.5748 100.844 20.1513C98.0666 21.7059 95.895 23.8626 94.3297 26.6214C92.7864 29.3803 92.0148 32.5113 92.0148 36.0146C92.0148 39.3646 92.7864 42.43 94.3297 45.2107C95.895 47.9915 98.0776 50.192 100.878 51.8122C103.677 53.4325 106.819 54.2426 110.302 54.2426C113.676 54.2426 116.751 53.4325 119.529 51.8122C122.307 50.192 124.5 47.9915 126.11 45.2107C127.719 42.43 128.524 39.3646 128.524 36.0146C128.524 32.7303 127.73 29.6978 126.143 26.917C124.555 24.1363 122.373 21.9248 119.595 20.2827ZM114.755 27.7708L114.739 27.7603C113.393 26.8924 111.91 26.4572 110.236 26.4572C108.607 26.4572 107.139 26.8815 105.784 27.7379L105.767 27.7483C104.391 28.6 103.311 29.7474 102.511 31.228C101.708 32.7147 101.307 34.2996 101.307 36.0146C101.307 37.7296 101.708 39.3146 102.511 40.8012C103.307 42.2751 104.394 43.4213 105.79 44.2745C107.174 45.1206 108.664 45.5392 110.302 45.5392C111.941 45.5392 113.415 45.1209 114.772 44.2809C116.149 43.4279 117.215 42.2925 117.99 40.8423C118.768 39.3866 119.165 37.7896 119.165 36.0146C119.165 34.2911 118.772 32.7148 117.99 31.2526C117.213 29.7986 116.142 28.6475 114.755 27.7708ZM147.77 21.4561C147.072 21.8865 146.367 22.3603 145.654 22.8773V18.7062H132.79V24.7822H138.908V47.1813H132.79V53.2245H151.64V47.1813H145.654V28.8219C149.446 25.8441 152.863 24.3552 155.906 24.3552C157.339 24.3552 158.364 24.826 158.981 25.7675C159.621 26.709 159.94 28.2636 159.94 30.4313V53.2245H172.606V47.1813H166.786V30.0043C166.786 25.9755 166.036 23.0087 164.537 21.1038C163.06 19.1988 160.767 18.2464 157.658 18.2464C154.538 18.2464 151.242 19.3163 147.77 21.4561ZM147.77 19.0136C151.102 17.1472 154.404 16.1444 157.658 16.1444C161.217 16.1444 164.222 17.2562 166.209 19.8155C168.134 22.2651 168.902 25.7959 168.902 30.0043V45.0794H172.606C173.775 45.0794 174.722 46.0205 174.722 47.1813V53.2245C174.722 54.3854 173.775 55.3265 172.606 55.3265H159.94C158.771 55.3265 157.824 54.3854 157.824 53.2245V30.4313C157.824 28.3603 157.498 27.3421 157.226 26.9428C157.22 26.9334 157.214 26.924 157.208 26.9145C157.086 26.7288 156.839 26.4572 155.906 26.4572C153.725 26.4572 151.031 27.4564 147.77 29.8588V45.0794H151.64C152.809 45.0794 153.756 46.0205 153.756 47.1813V53.2245C153.756 54.3854 152.809 55.3265 151.64 55.3265H132.79C131.621 55.3265 130.673 54.3854 130.673 53.2245V47.1813C130.673 46.0205 131.621 45.0794 132.79 45.0794H136.791V26.8842H132.79C131.621 26.8842 130.673 25.9431 130.673 24.7822V18.7062C130.673 17.5453 131.621 16.6042 132.79 16.6042H145.654C146.823 16.6042 147.77 17.5453 147.77 18.7062V19.0136ZM170.777 70.0995C169.784 69.9062 169.067 69.0418 169.067 68.0368V61.8951C169.067 61.2931 169.327 60.72 169.781 60.3211C170.235 59.9221 170.839 59.7356 171.441 59.8087C172.426 59.9285 173.496 59.9902 174.656 59.9902C176.375 59.9902 177.164 59.7142 177.44 59.5294C177.451 59.5221 177.462 59.5148 177.473 59.5076C177.683 59.372 178.021 59.0257 178.252 58.0598C178.255 58.0461 178.259 58.0325 178.262 58.0188C178.521 57.0232 178.691 55.2243 178.691 52.4691V26.8842H175.384C174.215 26.8842 173.267 25.9431 173.267 24.7822V18.7062C173.267 17.5453 174.215 16.6042 175.384 16.6042H187.653C188.822 16.6042 189.769 17.5453 189.769 18.7062V50.2686C189.769 54.9186 189.528 58.5685 189.001 61.1251C188.448 63.9348 187.088 66.2566 184.889 67.9517C182.575 69.7589 179.247 70.4672 175.318 70.4672C173.602 70.4672 172.078 70.353 170.777 70.0995ZM183.585 66.2961C185.349 64.9386 186.462 63.0775 186.925 60.7128C187.41 58.37 187.653 54.8886 187.653 50.2686V18.7062H175.384V24.7822H180.807V52.4691C180.807 55.2498 180.642 57.2752 180.311 58.5451C180.003 59.837 179.44 60.7456 178.625 61.2711C177.809 61.8185 176.486 62.0922 174.656 62.0922C174.193 62.0922 173.741 62.083 173.3 62.0645C172.565 62.0337 171.859 61.9773 171.184 61.8951V68.0368C172.308 68.2558 173.686 68.3653 175.318 68.3653C179.066 68.3653 181.821 67.6756 183.585 66.2961ZM190.166 7.07967C190.166 8.76984 189.524 10.2633 188.322 11.4562C187.121 12.6491 185.618 13.2871 183.916 13.2871C182.212 13.2871 180.708 12.6469 179.522 11.4357C178.349 10.2385 177.732 8.75129 177.732 7.07967C177.732 5.40804 178.349 3.92082 179.522 2.72364C180.708 1.5124 182.212 0.872284 183.916 0.872284C185.62 0.872284 187.147 1.47018 188.356 2.6703C189.564 3.87041 190.166 5.38723 190.166 7.07967ZM212.653 45.0794C213.822 45.0794 214.77 46.0205 214.77 47.1813V53.2245C214.77 54.3854 213.822 55.3265 212.653 55.3265H195.093C193.924 55.3265 192.977 54.3854 192.977 53.2245V47.1813C192.977 46.0205 193.924 45.0794 195.093 45.0794H198.4V26.8842H195.093C193.924 26.8842 192.977 25.9431 192.977 24.7822V18.7062C192.977 17.5453 193.924 16.6042 195.093 16.6042H207.362C208.531 16.6042 209.479 17.5453 209.479 18.7062V45.0794H212.653ZM200.517 24.7822V47.1813H195.093V53.2245H212.653V47.1813H207.362V18.7062H195.093V24.7822H200.517ZM209.876 7.07967C209.876 8.76984 209.233 10.2633 208.032 11.4562C206.831 12.6491 205.327 13.2871 203.625 13.2871C201.922 13.2871 200.418 12.6469 199.231 11.4357C198.059 10.2385 197.441 8.75129 197.441 7.07967C197.441 5.40804 198.059 3.92082 199.231 2.72364C200.418 1.5124 201.922 0.872284 203.625 0.872284C205.329 0.872284 206.857 1.47018 208.065 2.6703C209.274 3.87041 209.876 5.38723 209.876 7.07967ZM33.2498 46.3931C31.7285 47.4879 30.0199 48.0353 28.1239 48.0353C24.5744 48.0353 21.6533 47.0171 19.3604 44.9808C17.0896 42.9446 15.9542 40.131 15.9542 36.5401C15.9542 34.3068 16.4282 32.2595 17.3762 30.3984C18.3243 28.5373 19.6581 27.0484 21.3777 25.9317C23.0973 24.7932 25.0374 24.2239 27.198 24.2239C29.2704 24.2239 31.1333 24.7603 32.7868 25.8332C34.4403 26.8842 35.741 28.3074 36.689 30.1028C37.637 31.8764 38.111 33.8251 38.111 35.9489C38.111 38.0509 37.6811 40.0434 36.8213 41.9264C35.9615 43.8094 34.771 45.2983 33.2498 46.3931ZM74.2232 46.0647C72.5257 47.1157 70.6627 47.6411 68.6344 47.6411C66.6062 47.6411 64.7322 47.1157 63.0126 46.0647C61.2929 45.0137 59.9481 43.5905 58.9781 41.795C58.008 39.9996 57.523 38.0728 57.523 36.0146C57.523 33.9564 58.008 32.0296 58.9781 30.2342C59.9481 28.4388 61.2819 27.0156 62.9795 25.9646C64.6771 24.8917 66.54 24.3552 68.5683 24.3552C70.6407 24.3552 72.5257 24.9026 74.2232 25.9974C75.9208 27.0703 77.2436 28.4935 78.1916 30.267C79.1396 32.0406 79.6136 33.9564 79.6136 36.0146C79.6136 38.1166 79.1396 40.0543 78.1916 41.8279C77.2436 43.6014 75.9208 45.0137 74.2232 46.0647ZM115.891 46.0647C114.194 47.1157 112.331 47.6411 110.302 47.6411C108.274 47.6411 106.4 47.1157 104.681 46.0647C102.961 45.0137 101.616 43.5905 100.646 41.795C99.676 39.9996 99.1909 38.0728 99.1909 36.0146C99.1909 33.9564 99.676 32.0296 100.646 30.2342C101.616 28.4388 102.95 27.0156 104.647 25.9646C106.345 24.8917 108.208 24.3552 110.236 24.3552C112.309 24.3552 114.194 24.9026 115.891 25.9974C117.589 27.0703 118.912 28.4935 119.86 30.267C120.808 32.0406 121.282 33.9564 121.282 36.0146C121.282 38.1166 120.808 40.0543 119.86 41.8279C118.912 43.6014 117.589 45.0137 115.891 46.0647ZM186.826 9.96988C187.642 9.15974 188.05 8.19634 188.05 7.07967C188.05 5.9192 187.653 4.94485 186.859 4.15661C186.065 3.36837 185.084 2.97426 183.916 2.97426C182.791 2.97426 181.832 3.37932 181.039 4.18946C180.245 4.99959 179.848 5.963 179.848 7.07967C179.848 8.19634 180.245 9.15974 181.039 9.96988C181.832 10.78 182.791 11.1851 183.916 11.1851C185.04 11.1851 186.01 10.78 186.826 9.96988ZM206.536 9.96988C207.351 9.15974 207.759 8.19634 207.759 7.07967C207.759 5.9192 207.362 4.94485 206.569 4.15661C205.775 3.36837 204.794 2.97426 203.625 2.97426C202.501 2.97426 201.542 3.37932 200.748 4.18946C199.955 4.99959 199.558 5.963 199.558 7.07967C199.558 8.19634 199.955 9.15974 200.748 9.96988C201.542 10.78 202.501 11.1851 203.625 11.1851C204.75 11.1851 205.72 10.78 206.536 9.96988Z" fill="var(--poonji-stroke-color)" />
    </svg>
  </div>
);

export default React.memo(PoonjiTitle);
