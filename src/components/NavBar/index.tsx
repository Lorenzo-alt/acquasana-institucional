"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import WhatsButton from "../WhatsButton";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <motion.nav
      className={twMerge("w-full relative z-30 flex items-center flex-col 2xl:flex-row 2xl:justify-around shadow-lg bg-azul-escuro 2xl:py-5 2xl:px-14", pathname.includes('teste') ? 'hidden' : '')}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.15, type: "spring", ease: "linear" }}
    >
      <Link href={"/home"}>
        <div className="mt-5 2xl:mt-0">
          <svg width="240" height="90" viewBox="0 0 281 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.2408 8.98384C41.5015 26.198 40.4869 45.9182 31.187 56.3084C25.7998 62.3271 14.7853 66.5376 7.21347 62.25C0.875993 58.6602 -2.62078 50.4507 2.37413 43.0128C6.12453 37.4302 11.6199 36.4338 16.9226 33.0118C25.81 27.2782 30.9841 18.8305 34.2408 8.98048V8.98384Z"
              fill="#2F789B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.9452 13.5264C35.4853 14.9187 35.0321 16.3143 34.5451 17.6966C31.7247 25.7216 27.3284 32.5992 19.9966 37.3296C15.4312 40.2752 10.7001 41.1307 7.47387 45.9383C3.17223 52.3395 6.18541 59.4084 11.6402 62.4949C13.02 63.2766 14.5351 63.7295 16.1076 63.9073H16.1008C15.1302 64.0046 14.1631 64.0247 13.2128 63.9644H13.1722C13.0843 63.9543 12.9997 63.9476 12.9118 63.9409L12.7698 63.9274H12.7292L12.4857 63.8973L12.3437 63.8805H12.3301C12.2456 63.8704 12.161 63.8603 12.0799 63.8469L11.9108 63.8234L11.6876 63.7899C11.5963 63.7765 11.505 63.7597 11.417 63.7429L11.3528 63.7295C11.2513 63.7127 11.1533 63.6926 11.0552 63.6691L10.9402 63.6456C10.8388 63.6255 10.7373 63.5987 10.6358 63.5752L10.5513 63.555C10.4634 63.5349 10.3721 63.5114 10.2841 63.488L10.1286 63.4443C10.0339 63.4175 9.94258 63.3907 9.84789 63.3638L9.77349 63.3403C9.66865 63.3068 9.56382 63.2732 9.46236 63.2397L9.40825 63.2229C9.29666 63.186 9.18506 63.1458 9.07684 63.1055L9.03964 63.0921C8.93142 63.0518 8.82659 63.0116 8.71837 62.9679L8.63044 62.931C8.52561 62.8874 8.42077 62.8438 8.31594 62.7968L8.30241 62.7901C8.18405 62.7364 8.06907 62.6828 7.9507 62.6291L7.92027 62.6157C7.68354 62.5016 7.4502 62.3775 7.21685 62.2466C4.93752 60.9583 3.02681 59.0695 1.74511 56.8385C1.691 56.7412 1.63351 56.6439 1.58279 56.5466C1.52868 56.446 1.47795 56.3487 1.42722 56.248C1.3765 56.1474 1.32577 56.0501 1.27843 55.9494C1.23108 55.8488 1.18374 55.7481 1.13639 55.6441C1.08905 55.5401 1.04508 55.4395 1.00112 55.3355C0.957155 55.2315 0.916574 55.1275 0.875992 55.0235C0.304469 53.5674 -0.00665559 52.004 0.000107999 50.3937C0.000107999 50.2796 0.000107999 50.1655 0.00687158 50.0481C0.00687158 49.9307 0.017017 49.8166 0.0237805 49.6992C0.115089 48.1928 0.487086 46.6496 1.1905 45.1197C1.24461 45.0023 1.29872 44.8849 1.35621 44.7675C1.4137 44.65 1.47457 44.5326 1.53544 44.4152C1.59631 44.2978 1.66057 44.1804 1.7282 44.0629C1.79584 43.9455 1.86009 43.8281 1.93111 43.7107C2.00213 43.5932 2.07315 43.4758 2.14755 43.3618C2.22195 43.2443 2.29634 43.1303 2.37413 43.0128C2.43162 42.9256 2.49249 42.8384 2.55336 42.7545C2.61423 42.6673 2.67172 42.5868 2.7326 42.5029C2.79347 42.419 2.85434 42.3385 2.91521 42.258C2.97609 42.1775 3.03696 42.097 3.09783 42.0198C4.89356 39.7384 7.02071 38.3059 9.30342 37.0746L9.54014 36.9471L9.77687 36.823L10.7373 36.3265L11.9547 35.7226L12.4485 35.481L12.9422 35.2328C14.2611 34.5718 15.6003 33.8673 16.926 33.0118C18.5932 31.9349 20.1285 30.764 21.5455 29.5093C21.6639 29.4053 21.7822 29.2979 21.8972 29.1939C22.0156 29.0865 22.1272 28.9825 22.2455 28.8752C22.3605 28.7678 22.4755 28.6605 22.5871 28.5531C22.7021 28.4458 22.8137 28.335 22.9253 28.2277C23.0369 28.117 23.1485 28.0096 23.2567 27.8955C23.3683 27.7848 23.4765 27.6741 23.5847 27.5601C23.6929 27.4493 23.8012 27.3353 23.9094 27.2246C24.0176 27.1105 24.1224 26.9964 24.2273 26.8857C24.3321 26.7717 24.4369 26.6576 24.5418 26.5402C24.6466 26.4261 24.7481 26.3087 24.8495 26.1912C24.951 26.0738 25.0524 25.9598 25.1539 25.839C25.2553 25.7216 25.3534 25.6041 25.4549 25.4867C27.6395 22.8799 29.4657 20.0081 31.0044 16.9317C31.0754 16.7907 31.143 16.6498 31.2141 16.5089C31.2817 16.368 31.3493 16.2271 31.417 16.0862C31.4846 15.9453 31.5522 15.801 31.6199 15.6601C31.6875 15.5192 31.7518 15.375 31.816 15.2307C31.8803 15.0864 31.9479 14.9422 32.0122 14.7979C32.0764 14.6537 32.1407 14.5094 32.2015 14.3651C32.2658 14.2209 32.3267 14.0733 32.3909 13.929C32.4518 13.7847 32.516 13.6371 32.5735 13.4895L32.7528 13.05C32.8136 12.9024 32.8711 12.7548 32.932 12.6072C32.9895 12.4595 33.0504 12.3086 33.1079 12.1609L33.2803 11.7147C33.3378 11.5638 33.3919 11.4162 33.4494 11.2652C33.5035 11.1142 33.561 10.9632 33.6151 10.8123L33.7775 10.356L33.9364 9.89973L34.092 9.44011L34.2441 8.98048C34.8765 10.4801 35.4413 11.9966 35.9486 13.523L35.9452 13.5264Z"
              fill="#155773"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.5017 40.4899C53.2803 39.6378 39.1511 31.9147 34.8123 21.5078C32.2996 15.479 33.1079 6.02479 38.9415 2.06598C43.8248 -1.24533 51.0956 -0.866225 54.7919 5.384C57.565 10.0742 56.3475 14.3987 56.9833 19.4512C58.0486 27.9123 62.4212 34.6457 68.5017 40.4899Z"
              fill="#ADDEE3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.5017 40.4899C66.476 40.3759 64.4672 40.141 62.5024 39.7921C57.7104 34.9912 54.2948 29.4757 53.4324 22.625C52.8947 18.3374 53.9262 14.6671 51.5724 10.6814C48.4375 5.37729 42.2624 5.05522 38.1163 7.86665C35.3838 9.71856 33.9499 12.9963 33.5712 16.4183C33.0301 11.0471 34.5857 5.01831 38.9415 2.06262C43.8248 -1.24869 51.0956 -0.86958 54.7919 5.38065C57.565 10.0708 56.3475 14.3953 56.9833 19.4478C58.0486 27.909 62.4212 34.6423 68.5017 40.4866V40.4899Z"
              fill="#84C2CE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M85.2348 54.0774C77.7644 42.0231 65.0793 33.9176 54.518 34.9979C48.4003 35.6253 40.913 40.4866 40.2232 47.0086C39.6449 52.467 43.1924 58.2375 50.0168 58.4757C55.1402 58.6569 58.1906 55.7414 62.6613 54.017C70.1554 51.1284 77.6866 51.7055 85.2382 54.074L85.2348 54.0774Z"
              fill="#BDCC3B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.179 47.3508C72.7695 39.1446 62.9657 34.1324 54.518 34.9979C48.4003 35.6253 40.913 40.4866 40.2232 47.0086C39.8004 50.9909 41.5759 55.1375 45.2147 57.184C44.0716 55.2181 43.588 52.8763 43.8281 50.5883C44.518 44.0663 52.0053 39.2016 58.123 38.5776C65.2586 37.8463 73.3681 41.3119 80.179 47.3541V47.3508Z"
              fill="#889D35"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M268.443 27.6238C268.224 27.7479 267.909 27.8586 267.503 27.9492C267.097 28.0432 266.658 28.1304 266.188 28.2042C265.718 28.2814 265.231 28.3451 264.734 28.3921C264.233 28.4357 263.78 28.4625 263.371 28.4625C262.495 28.4625 261.764 28.1438 261.186 27.5064C260.608 26.8723 260.317 26.0872 260.317 25.1546C260.317 24.2219 260.544 23.514 260.997 22.9437C261.45 22.37 262.055 21.9238 262.803 21.6151C263.553 21.3065 264.422 21.1018 265.41 21.0079C266.394 20.9173 267.422 20.8838 268.484 20.9139L268.437 27.6204L268.443 27.6238ZM272.671 30.3514V15.328C272.671 14.0867 272.427 13.0701 271.944 12.2784C271.46 11.4866 270.855 10.8559 270.138 10.3929C269.417 9.92657 268.643 9.60785 267.814 9.43675C266.986 9.26565 266.211 9.18178 265.491 9.18178C264.145 9.18178 262.711 9.32268 261.196 9.60114C259.678 9.8796 258.166 10.4701 256.665 11.3725L258.356 14.7275C259.421 13.9827 260.53 13.4559 261.69 13.1439C262.85 12.8319 263.929 12.6776 264.93 12.6776C266.086 12.6776 266.972 12.9494 267.581 13.4929C268.19 14.0364 268.498 14.808 268.498 15.7977V17.4752C266.932 17.445 265.407 17.5221 263.919 17.7066C262.431 17.8945 261.108 18.2669 259.952 18.8238C258.795 19.3841 257.855 20.1759 257.135 21.1991C256.414 22.2224 256.056 23.5442 256.056 25.1579C256.056 25.9665 256.228 26.7716 256.573 27.5802C256.918 28.3854 257.388 29.1167 257.984 29.771C258.579 30.4218 259.275 30.9519 260.073 31.3545C263.526 33.099 269.235 31.2773 272.681 30.3547L272.671 30.3514ZM251.856 31.586V18.4045C251.856 15.3314 251.047 13.0366 249.438 11.5336C245.014 7.40031 237.385 9.39314 232.793 12.0737V31.586H237.02V14.2108C237.645 13.8384 238.43 13.5432 239.367 13.3251C240.307 13.1104 241.403 12.9997 242.654 12.9997C244.155 12.9997 245.369 13.5365 246.293 14.6067C247.216 15.6769 247.679 17.2101 247.679 19.1962V31.586H251.859H251.856ZM224.372 27.6272C224.152 27.7513 223.838 27.862 223.432 27.9526C223.026 28.0432 222.583 28.1337 222.116 28.2076C221.65 28.2814 221.159 28.3485 220.662 28.3954C220.165 28.439 219.708 28.4659 219.299 28.4659C218.423 28.4659 217.693 28.1472 217.115 27.5097C216.536 26.8757 216.245 26.0906 216.245 25.1579C216.245 24.2253 216.475 23.5174 216.925 22.947C217.378 22.3733 217.984 21.9271 218.734 21.6185C219.482 21.3098 220.354 21.1052 221.342 21.0112C222.326 20.9207 223.354 20.8871 224.416 20.9173L224.369 27.6238L224.372 27.6272ZM228.599 30.3547V15.3314C228.599 14.09 228.356 13.0735 227.872 12.2817C227.385 11.49 226.783 10.8592 226.063 10.3963C225.346 9.93328 224.568 9.61121 223.739 9.44011C222.911 9.27236 222.137 9.18513 221.416 9.18513C220.07 9.18513 218.636 9.32604 217.121 9.6045C215.606 9.88296 214.091 10.4734 212.59 11.3759L214.281 14.7308C215.346 13.986 216.455 13.4593 217.615 13.1473C218.772 12.8353 219.854 12.681 220.855 12.681C222.015 12.681 222.897 12.9527 223.51 13.4962C224.118 14.0397 224.423 14.8147 224.423 15.801V17.4785C222.857 17.4483 221.332 17.5255 219.844 17.71C218.356 17.8979 217.033 18.2703 215.877 18.8272C214.72 19.3875 213.777 20.1792 213.06 21.2025C212.343 22.2257 211.981 23.5476 211.981 25.1613C211.981 25.9698 212.157 26.7784 212.498 27.5835C212.84 28.3887 213.313 29.1201 213.909 29.7743C214.504 30.4252 215.2 30.9552 215.999 31.3578C219.451 33.1024 225.16 31.2807 228.606 30.3581L228.599 30.3547ZM207.784 25.0204C207.784 23.6851 207.456 22.6216 206.8 21.8298C206.144 21.0381 205.322 20.4174 204.335 19.9679C203.347 19.5183 202.282 19.166 201.142 18.9211C200.003 18.6729 198.934 18.4313 197.95 18.1998C196.966 17.9683 196.141 17.6697 195.485 17.3141C194.829 16.9585 194.497 16.4217 194.497 15.7071C194.497 15.3347 194.626 14.9824 194.873 14.6604C195.119 14.3383 195.454 14.0364 195.86 13.7747C196.266 13.513 196.746 13.305 197.291 13.1674C197.835 13.0299 198.393 12.9594 198.958 12.9594C199.959 12.9594 200.939 13.0601 201.893 13.2614C202.847 13.4627 203.828 13.8921 204.829 14.5429L206.705 11.282C205.61 10.5674 204.379 10.0541 203.019 9.7454C201.66 9.43675 200.368 9.27907 199.147 9.27907C197.926 9.27907 196.82 9.45017 195.742 9.79237C194.663 10.1346 193.713 10.6076 192.901 11.2115C192.089 11.8154 191.433 12.5199 190.953 13.3083C190.469 14.0967 190.226 14.9455 190.226 15.848C190.226 17.1531 190.557 18.1965 191.213 18.9681C191.869 19.7397 192.695 20.3671 193.679 20.8301C194.663 21.2931 195.732 21.6554 196.871 21.9003C198.011 22.1452 199.079 22.3901 200.064 22.6216C201.048 22.8531 201.873 23.145 202.529 23.4838C203.185 23.8227 203.516 24.3225 203.516 24.9734C203.516 25.5001 203.381 25.9765 203.117 26.3959C202.854 26.8119 202.492 27.1642 202.039 27.4426C201.585 27.7211 201.075 27.9392 200.513 28.0935C199.949 28.2478 199.37 28.325 198.775 28.325C197.679 28.325 196.59 28.1606 195.512 27.8352C194.433 27.5131 193.171 27.0367 191.731 26.416L190.135 29.677C192.891 31.2303 195.657 32.0053 198.444 32.0053C199.665 32.0053 200.835 31.8544 201.94 31.5625C203.05 31.2706 204.047 30.8244 204.923 30.2373C205.799 29.6502 206.499 28.9154 207.013 28.0465C207.527 27.1776 207.788 26.1678 207.788 25.017L207.784 25.0204Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M183.679 28.5263C183.398 28.6806 183.002 28.8316 182.505 28.9691C182.008 29.1067 181.454 29.2275 180.862 29.318C180.27 29.4086 179.654 29.4824 179.029 29.5294C178.407 29.573 177.838 29.5999 177.338 29.5999C176.148 29.5999 175.153 29.1973 174.355 28.3887C173.557 27.5802 173.158 26.5704 173.158 25.3626C173.158 24.1548 173.449 23.2825 174.027 22.5679C174.605 21.8533 175.383 21.2998 176.354 20.9139C177.321 20.5281 178.447 20.2664 179.709 20.1457C180.973 20.0249 182.299 19.9913 183.675 20.0517V28.5296L183.679 28.5263ZM185.931 30.14V15.1569C185.931 14.0699 185.708 13.1674 185.275 12.4562C184.839 11.7449 184.288 11.1813 183.631 10.7787C182.975 10.3761 182.262 10.0943 181.494 9.93999C180.73 9.78566 180.016 9.7085 179.36 9.7085C178.2 9.7085 176.966 9.81586 175.65 10.0339C174.335 10.252 173.019 10.7619 171.707 11.5705L172.6 13.3419C173.601 12.691 174.67 12.228 175.792 11.9664C176.915 11.7047 177.984 11.5705 178.985 11.5705C182.116 11.5705 183.679 13.003 183.679 15.8547V18.23C181.927 18.1998 180.273 18.2703 178.724 18.438C177.176 18.6091 175.809 18.9614 174.639 19.4848C173.469 20.0081 172.532 20.7529 171.846 21.6956C171.159 22.6417 170.814 23.8629 170.814 25.3525C170.814 26.0973 170.967 26.8287 171.261 27.5399C171.555 28.2512 171.974 28.9087 172.505 29.4958C173.033 30.083 173.652 30.5627 174.338 30.915C177.196 32.3979 183.029 30.8714 185.934 30.1299L185.931 30.14ZM166.618 28.8685V10.3895H164.365V27.6238C163.895 27.966 163.435 28.2612 162.979 28.5095C162.526 28.7578 162.032 28.9591 161.501 29.1167C160.97 29.2711 160.382 29.3818 159.739 29.4422C159.097 29.5059 158.353 29.5361 157.507 29.5361C156.726 29.5361 155.941 29.412 155.16 29.1637C154.379 28.9154 153.662 28.533 153.023 28.023C152.384 27.5131 151.853 26.8555 151.45 26.0671C151.048 25.2787 150.842 24.3527 150.842 23.2959V10.3895H148.589V23.3396C148.589 24.8862 148.873 26.208 149.435 27.2749C149.996 28.3451 150.72 29.2107 151.596 29.8615C152.468 30.5124 153.419 30.9888 154.436 31.2807C155.454 31.5759 156.418 31.7235 157.324 31.7235C157.981 31.7235 158.654 31.6833 159.343 31.6061C160.033 31.5289 160.696 31.4182 161.339 31.2807C163.395 30.8311 164.846 29.989 166.621 28.8685H166.618ZM142.14 27.9962C140.919 28.6806 139.827 29.1335 138.877 29.3482C137.927 29.5629 136.865 29.6737 135.708 29.6737C134.487 29.6737 133.364 29.4757 132.35 29.0899C131.335 28.7041 130.473 28.1438 129.766 27.4124C129.063 26.6811 128.512 25.8088 128.123 24.8023C127.734 23.7958 127.534 22.6686 127.534 21.4239C127.534 20.0886 127.757 18.8507 128.19 17.7201C128.627 16.5895 129.225 15.6065 129.976 14.7879C130.723 13.9659 131.623 13.3184 132.651 12.8554C133.682 12.3924 134.812 12.1576 136.033 12.1576C137.128 12.1576 138.126 12.275 139.015 12.5065C139.905 12.738 140.946 13.1976 142.137 13.882V27.9962H142.14ZM144.393 38.4736V12.7749C142.617 11.6644 141.021 10.6177 138.9 10.2486C137.839 10.0641 136.726 9.96683 135.566 9.96683C134.065 9.96683 132.675 10.2554 131.41 10.829C130.145 11.4027 129.046 12.1878 128.123 13.1808C127.199 14.1739 126.469 15.3649 125.938 16.7438C125.407 18.1227 125.14 19.6257 125.14 21.2394C125.14 22.8531 125.394 24.2085 125.891 25.4766C126.388 26.7482 127.091 27.8553 127.981 28.7846C128.87 29.7139 129.939 30.4419 131.173 30.9519C132.407 31.4618 133.764 31.7202 135.235 31.7202C137.551 31.7202 139.851 31.331 142.137 30.556V38.4703H144.389L144.393 38.4736ZM122.905 30.2775L121.917 28.3216C121.291 28.5699 120.71 28.7745 120.179 28.9289C119.648 29.0798 119.144 29.2107 118.677 29.3013C118.211 29.3918 117.734 29.469 117.267 29.5126C116.8 29.5562 116.313 29.5831 115.813 29.5831C113.091 29.5831 110.943 28.8114 109.381 27.2782C107.818 25.745 107.034 23.6516 107.034 21.0146C107.034 19.7095 107.24 18.5118 107.646 17.4282C108.048 16.3445 108.633 15.4085 109.384 14.6335C110.132 13.8585 111.038 13.2479 112.083 12.8152C113.128 12.3824 114.298 12.1643 115.58 12.1643C116.05 12.1643 116.506 12.1911 116.942 12.2348C117.379 12.2784 117.829 12.3522 118.282 12.4428C118.735 12.5367 119.225 12.6709 119.736 12.8386C120.25 13.0064 120.838 13.2178 121.498 13.4694L122.438 11.5604C121.342 11.0639 120.165 10.6714 118.917 10.3963C117.67 10.1212 116.537 9.97689 115.536 9.97689C113.939 9.97689 112.475 10.252 111.146 10.7921C109.817 11.3323 108.657 12.0972 107.673 13.0735C106.686 14.0498 105.921 15.224 105.373 16.5895C104.826 17.9549 104.552 19.4613 104.552 21.1085C104.552 22.7558 104.829 24.138 105.373 25.4397C105.918 26.7415 106.682 27.8654 107.649 28.7947C108.617 29.724 109.79 30.452 111.146 30.962C112.506 31.4719 114.017 31.7302 115.678 31.7302C116.743 31.7302 117.957 31.6027 119.317 31.3578C120.676 31.1129 121.877 30.7539 122.908 30.2876L122.905 30.2775ZM98.0992 28.5263C97.8185 28.6806 97.4228 28.8316 96.9257 28.9691C96.4285 29.1067 95.8739 29.2275 95.2821 29.318C94.6903 29.4086 94.0748 29.4824 93.4526 29.526C92.8303 29.5697 92.2622 29.5965 91.7617 29.5965C90.5713 29.5965 89.577 29.1939 88.7789 28.3854C87.9808 27.5802 87.5818 26.5704 87.5818 25.3592C87.5818 24.2118 87.8726 23.2792 88.4509 22.5646C89.0292 21.85 89.807 21.2964 90.7742 20.9106C91.7414 20.5248 92.8641 20.2631 94.1323 20.1423C95.3971 20.0215 96.7228 19.988 98.0992 20.0484V28.5263ZM100.351 30.14V15.1569C100.351 14.0699 100.132 13.1674 99.6954 12.4562C99.2591 11.7449 98.7079 11.1813 98.0518 10.7787C97.3957 10.3761 96.6822 10.0943 95.9145 9.93999C95.1468 9.78566 94.4367 9.7085 93.7772 9.7085C92.6207 9.7085 91.3829 9.81921 90.0674 10.0339C88.7553 10.252 87.4397 10.7653 86.1242 11.5705L87.017 13.3419C88.018 12.691 89.0867 12.228 90.2094 11.9664C91.3322 11.7047 92.4008 11.5705 93.4018 11.5705C96.5334 11.5705 98.0958 13.003 98.0958 15.8547V18.23C96.344 18.1998 94.6903 18.2703 93.1414 18.438C91.5926 18.6058 90.2263 18.9614 89.0562 19.4848C87.8861 20.0115 86.9494 20.7529 86.2629 21.6956C85.5764 22.6417 85.2314 23.8629 85.2314 25.3525C85.2314 26.0973 85.3836 26.8287 85.6778 27.5433C85.972 28.2579 86.3914 28.9121 86.9223 29.4992C87.4533 30.0863 88.0688 30.5627 88.7553 30.9183C91.6163 32.4012 97.4465 30.8747 100.351 30.1333V30.14Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M89.9727 38.5609V40.9127H92.7999V41.9728H89.9727V46.4718C89.9727 47.1461 90.0674 47.5856 90.2534 47.7735C90.436 47.9647 90.8181 48.062 91.3897 48.062H92.7999V49.1993H91.3897C90.3379 49.1993 89.6007 49.0014 89.1983 48.6089C88.7958 48.2197 88.5963 47.5017 88.5963 46.4684V41.9695H87.5885V40.9093H88.5963V38.5575H89.9761L89.9727 38.5609ZM99.4485 42.1875C99.2929 42.1003 99.1238 42.0332 98.9446 41.9896C98.7654 41.9493 98.5624 41.9258 98.3426 41.9258C97.5682 41.9258 96.9696 42.1775 96.557 42.674C96.1445 43.1739 95.9348 43.9019 95.9348 44.8346V49.1993H94.555V40.9093H95.9348V42.1976C96.2222 41.6944 96.601 41.3186 97.0609 41.077C97.5242 40.8321 98.089 40.7114 98.7484 40.7114C98.8431 40.7114 98.948 40.7181 99.063 40.7281C99.1779 40.7382 99.3031 40.7583 99.4417 40.7818L99.4519 42.1808L99.4485 42.1875ZM104.683 45.0359C103.581 45.0359 102.803 45.1633 102.38 45.4116C101.954 45.6599 101.738 46.0927 101.738 46.6999C101.738 47.183 101.9 47.5688 102.218 47.8506C102.536 48.1325 102.976 48.2767 103.527 48.2767C104.288 48.2767 104.897 48.0083 105.356 47.4749C105.816 46.9415 106.046 46.2302 106.046 45.3412V45.0359H104.68H104.683ZM107.423 44.4722V49.2027H106.05V47.9446C105.735 48.4478 105.346 48.8202 104.88 49.0584C104.416 49.2966 103.841 49.4174 103.165 49.4174C102.309 49.4174 101.63 49.1792 101.126 48.7028C100.622 48.2297 100.368 47.589 100.368 46.7905C100.368 45.8578 100.686 45.1533 101.315 44.6802C101.941 44.2072 102.881 43.9724 104.129 43.9724H106.053V43.8382C106.053 43.2108 105.843 42.7277 105.427 42.3855C105.015 42.0466 104.43 41.8688 103.679 41.8688C103.202 41.8688 102.736 41.9258 102.286 42.0366C101.833 42.1506 101.396 42.3217 100.977 42.5499V41.2918C101.481 41.1005 101.968 40.9529 102.438 40.8556C102.911 40.7617 103.371 40.7114 103.818 40.7114C105.028 40.7114 105.928 41.0234 106.523 41.644C107.118 42.2647 107.419 43.2074 107.419 44.4689L107.423 44.4722ZM111.609 38.5575V40.9093H114.437V41.9695H111.609V46.4684C111.609 47.1428 111.704 47.5822 111.89 47.7701C112.073 47.9614 112.455 48.0586 113.026 48.0586H114.437V49.196H113.026C111.975 49.196 111.237 48.998 110.835 48.6055C110.433 48.2163 110.233 47.4984 110.233 46.4651V41.9661H109.225V40.9059H110.233V38.5541H111.613L111.609 38.5575ZM120.037 45.0325C118.934 45.0325 118.157 45.16 117.734 45.4083C117.308 45.6565 117.091 46.0893 117.091 46.6965C117.091 47.1797 117.254 47.5655 117.572 47.8473C117.889 48.1291 118.329 48.2734 118.88 48.2734C119.641 48.2734 120.253 48.005 120.713 47.4715C121.17 46.9381 121.403 46.2269 121.403 45.3378V45.0325H120.037ZM122.776 44.4689V49.1993H121.403V47.9412C121.092 48.4445 120.7 48.8169 120.233 49.0551C119.77 49.2933 119.195 49.414 118.515 49.414C117.663 49.414 116.98 49.1758 116.476 48.6994C115.972 48.2264 115.718 47.5856 115.718 46.7871C115.718 45.8545 116.036 45.1499 116.662 44.6769C117.287 44.2038 118.228 43.969 119.475 43.969H121.4V43.8348C121.4 43.2074 121.19 42.7243 120.777 42.3821C120.365 42.0433 119.78 41.8655 119.029 41.8655C118.552 41.8655 118.086 41.9225 117.636 42.0332C117.186 42.1473 116.75 42.3184 116.33 42.5465V41.2884C116.831 41.0972 117.321 40.9496 117.791 40.8523C118.261 40.7583 118.725 40.708 119.171 40.708C120.382 40.708 121.285 41.02 121.877 41.6407C122.472 42.2613 122.773 43.2041 122.773 44.4655L122.776 44.4689ZM132.11 42.4995C132.455 41.8889 132.867 41.4327 133.344 41.1441C133.818 40.8556 134.382 40.708 135.032 40.708C135.901 40.708 136.574 41.0133 137.044 41.6138C137.514 42.2144 137.754 43.0799 137.754 44.1938V49.196H136.374V44.2374C136.374 43.4423 136.229 42.8518 135.948 42.4693C135.667 42.0869 135.231 41.8923 134.65 41.8923C133.939 41.8923 133.375 42.1271 132.962 42.5968C132.549 43.0665 132.343 43.7107 132.343 44.5125V49.196H130.963V44.2374C130.963 43.4389 130.818 42.8451 130.537 42.466C130.257 42.0869 129.817 41.8923 129.225 41.8923C128.525 41.8923 127.967 42.1305 127.555 42.6002C127.142 43.0665 126.936 43.714 126.936 44.5125V49.196H125.556V40.9059H126.936V42.1942C127.25 41.6876 127.629 41.3085 128.062 41.0703C128.498 40.8288 129.019 40.708 129.624 40.708C130.23 40.708 130.75 40.8657 131.173 41.1676C131.596 41.4696 131.91 41.9191 132.113 42.4995H132.11ZM147.636 44.7138V45.3814H141.325C141.386 46.3174 141.67 47.0354 142.177 47.5219C142.685 48.0117 143.398 48.2566 144.308 48.2566C144.836 48.2566 145.346 48.1928 145.84 48.0654C146.334 47.9379 146.824 47.7433 147.311 47.4883V48.7766C146.821 48.9846 146.31 49.1423 145.796 49.2496C145.282 49.357 144.754 49.4107 144.223 49.4107C142.891 49.4107 141.832 49.0249 141.055 48.2566C140.28 47.4883 139.888 46.4449 139.888 45.1332C139.888 43.8214 140.257 42.6975 140.994 41.9024C141.731 41.1072 142.729 40.708 143.98 40.708C145.106 40.708 145.995 41.067 146.648 41.7849C147.301 42.5029 147.629 43.4792 147.629 44.7138H147.636ZM146.266 44.3146C146.256 43.5698 146.046 42.9726 145.637 42.5331C145.228 42.0902 144.683 41.8655 144.007 41.8655C143.239 41.8655 142.624 42.0835 142.167 42.5096C141.711 42.939 141.44 43.5429 141.373 44.3246L146.266 44.3179V44.3146ZM156.834 44.1971V49.1993H155.461V44.2407C155.461 43.4557 155.306 42.8686 154.998 42.4794C154.693 42.0936 154.23 41.8957 153.611 41.8957C152.871 41.8957 152.286 42.1305 151.859 42.6002C151.433 43.0665 151.217 43.714 151.217 44.5159V49.1993H149.837V40.9093H151.217V42.1976C151.545 41.6977 151.934 41.3253 152.377 41.0804C152.82 40.8355 153.334 40.708 153.919 40.708C154.876 40.708 155.607 41.0066 156.097 41.5937C156.587 42.1808 156.834 43.0531 156.834 44.1971ZM160.929 38.5575V40.9093H163.757V41.9695H160.929V46.4684C160.929 47.1428 161.024 47.5822 161.21 47.7701C161.393 47.9614 161.775 48.0586 162.346 48.0586H163.757V49.196H162.346C161.295 49.196 160.557 48.998 160.155 48.6055C159.753 48.2163 159.553 47.4984 159.553 46.4651V41.9661H158.545V40.9059H159.553V38.5541H160.933L160.929 38.5575ZM168.802 41.8655C168.065 41.8655 167.48 42.154 167.057 42.721C166.631 43.2879 166.415 44.073 166.415 45.0627C166.415 46.0524 166.631 46.8375 167.054 47.4078C167.477 47.9748 168.062 48.2633 168.802 48.2633C169.543 48.2633 170.114 47.9748 170.541 47.4044C170.967 46.8341 171.183 46.0524 171.183 45.0661C171.183 44.0797 170.967 43.3047 170.541 42.731C170.114 42.1607 169.533 41.8688 168.802 41.8688V41.8655ZM168.802 40.7114C169.996 40.7114 170.936 41.0972 171.616 41.8655C172.292 42.6337 172.637 43.7006 172.637 45.0627C172.637 46.4248 172.296 47.485 171.616 48.2599C170.936 49.0316 169.996 49.4174 168.802 49.4174C167.609 49.4174 166.662 49.0316 165.985 48.2599C165.309 47.4883 164.967 46.4248 164.967 45.0627C164.967 43.7006 165.309 42.6371 165.985 41.8655C166.662 41.0972 167.602 40.7114 168.802 40.7114ZM185.268 37.6852H186.641V49.2027H185.268V47.9614C184.981 48.4545 184.616 48.8236 184.176 49.0584C183.736 49.2966 183.205 49.4174 182.59 49.4174C181.579 49.4174 180.757 49.0148 180.125 48.2163C179.492 47.4212 179.174 46.3678 179.174 45.0661C179.174 43.7643 179.496 42.7143 180.125 41.9158C180.757 41.1173 181.579 40.7147 182.59 40.7147C183.205 40.7147 183.736 40.8355 184.176 41.0737C184.616 41.3119 184.981 41.6809 185.268 42.1741V37.6852ZM180.591 45.0627C180.591 46.0658 180.801 46.8542 181.213 47.4212C181.626 47.9882 182.198 48.2734 182.925 48.2734C183.652 48.2734 184.227 47.9882 184.643 47.4212C185.059 46.8542 185.268 46.0658 185.268 45.0627C185.268 44.0596 185.059 43.2745 184.643 42.7042C184.227 42.1372 183.652 41.852 182.925 41.852C182.198 41.852 181.626 42.1372 181.213 42.7042C180.801 43.2712 180.591 44.0596 180.591 45.0627ZM196.614 44.7171V45.3848H190.304C190.361 46.3208 190.649 47.0387 191.156 47.5252C191.663 48.015 192.377 48.2599 193.286 48.2599C193.814 48.2599 194.325 48.1962 194.818 48.0687C195.309 47.9412 195.803 47.7466 196.289 47.4917V48.78C195.799 48.988 195.288 49.1456 194.774 49.253C194.257 49.3604 193.733 49.414 193.202 49.414C191.869 49.414 190.811 49.0282 190.033 48.2599C189.259 47.4917 188.866 46.4483 188.866 45.1365C188.866 43.8247 189.238 42.7008 189.976 41.9057C190.713 41.1106 191.711 40.7114 192.962 40.7114C194.088 40.7114 194.977 41.0703 195.63 41.7883C196.283 42.5062 196.611 43.4825 196.611 44.7171H196.614ZM195.241 44.3179C195.231 43.5731 195.021 42.9759 194.612 42.5364C194.203 42.0936 193.658 41.8688 192.982 41.8688C192.214 41.8688 191.602 42.0869 191.146 42.513C190.689 42.9424 190.419 43.5463 190.351 44.328L195.241 44.3213V44.3179ZM210.868 44.7171V45.3848H204.558C204.615 46.3208 204.9 47.0354 205.41 47.5252C205.921 48.015 206.631 48.2599 207.541 48.2599C208.065 48.2599 208.579 48.1962 209.073 48.0687C209.566 47.9412 210.06 47.7466 210.544 47.4917V48.78C210.053 48.988 209.546 49.1456 209.029 49.253C208.511 49.3604 207.987 49.414 207.456 49.414C206.127 49.414 205.065 49.0316 204.287 48.2599C203.51 47.4883 203.121 46.4483 203.121 45.1365C203.121 43.8247 203.489 42.7008 204.23 41.9057C204.967 41.1106 205.961 40.7114 207.216 40.7114C208.342 40.7114 209.232 41.0703 209.884 41.7883C210.54 42.5062 210.865 43.4825 210.865 44.7171H210.868ZM209.495 44.3179C209.485 43.5731 209.276 42.9793 208.866 42.5364C208.454 42.0936 207.913 41.8688 207.236 41.8688C206.469 41.8688 205.857 42.0869 205.397 42.513C204.937 42.9424 204.673 43.5463 204.602 44.328L209.492 44.3213L209.495 44.3179ZM217.348 37.6852V38.8158H216.036C215.542 38.8158 215.2 38.9165 215.008 39.1111C214.815 39.309 214.72 39.6646 214.72 40.1779V40.9093H216.983V41.9695H214.72V49.1993H213.34V41.9695H212.025V40.9093H213.34V40.3323C213.34 39.4097 213.557 38.7387 213.99 38.3159C214.423 37.8932 215.109 37.6819 216.049 37.6819H217.345L217.348 37.6852ZM218.498 37.6852H219.867V49.2027H218.498V37.6852ZM222.603 45.9283V40.9127H223.976V45.8779C223.976 46.6596 224.132 47.2501 224.44 47.6426C224.747 48.0352 225.207 48.2331 225.829 48.2331C226.57 48.2331 227.155 47.9983 227.585 47.5286C228.014 47.0589 228.231 46.4214 228.231 45.6129V40.9127H229.604V49.2027H228.231V47.9278C227.896 48.431 227.51 48.8034 227.071 49.0484C226.634 49.2933 226.12 49.414 225.539 49.414C224.578 49.414 223.851 49.1188 223.354 48.525C222.86 47.9345 222.61 47.0689 222.61 45.9283H222.603ZM239.576 44.7171V45.3848H233.266C233.324 46.3208 233.608 47.0354 234.118 47.5252C234.629 48.015 235.339 48.2599 236.249 48.2599C236.773 48.2599 237.287 48.1962 237.781 48.0687C238.274 47.9412 238.768 47.7466 239.252 47.4917V48.78C238.761 48.988 238.254 49.1456 237.737 49.253C237.219 49.3604 236.695 49.414 236.164 49.414C234.835 49.414 233.773 49.0316 232.995 48.2599C232.218 47.4883 231.829 46.4483 231.829 45.1365C231.829 43.8247 232.197 42.7008 232.938 41.9057C233.675 41.1106 234.669 40.7114 235.924 40.7114C237.05 40.7114 237.94 41.0703 238.592 41.7883C239.248 42.5062 239.573 43.4825 239.573 44.7171H239.576ZM238.203 44.3179C238.193 43.5731 237.984 42.9793 237.574 42.5364C237.162 42.0936 236.621 41.8688 235.944 41.8688C235.177 41.8688 234.565 42.0869 234.105 42.513C233.645 42.9424 233.381 43.5463 233.31 44.328L238.2 44.3213L238.203 44.3179ZM248.772 44.2005V49.2027H247.399V44.2441C247.399 43.459 247.243 42.8753 246.935 42.4828C246.627 42.0936 246.168 41.899 245.549 41.899C244.808 41.899 244.223 42.1339 243.797 42.6035C243.367 43.0699 243.154 43.714 243.154 44.5192V49.2027H241.775V40.9127H243.154V42.201C243.482 41.7011 243.871 41.3287 244.314 41.0838C244.757 40.8388 245.271 40.7114 245.856 40.7114C246.813 40.7114 247.544 41.0066 248.034 41.5971C248.525 42.1875 248.772 43.0565 248.772 44.2005ZM252.87 40.9127H255.697V41.9728H252.87V46.4718C252.87 47.1461 252.965 47.5823 253.151 47.7735C253.337 47.9647 253.716 48.062 254.287 48.062H255.697V49.1993H254.287C253.232 49.1993 252.495 49.0014 252.092 48.6089C251.69 48.2197 251.49 47.5017 251.49 46.4684V41.9695H250.483V40.9093H251.49V38.5575H252.87V40.9127ZM264.649 44.7205V45.3881H258.339C258.396 46.3242 258.68 47.0387 259.191 47.5286C259.701 48.0184 260.412 48.2633 261.321 48.2633C261.849 48.2633 262.36 48.1996 262.853 48.0721C263.347 47.9446 263.837 47.75 264.324 47.495V48.7833C263.834 48.9913 263.327 49.149 262.809 49.2564C262.292 49.3637 261.768 49.4174 261.237 49.4174C259.904 49.4174 258.846 49.0349 258.068 48.2633C257.29 47.4917 256.901 46.4516 256.901 45.1399C256.901 43.8281 257.27 42.7042 258.007 41.9091C258.744 41.114 259.742 40.7147 260.993 40.7147C262.119 40.7147 263.009 41.0737 263.662 41.7916C264.314 42.5096 264.642 43.4859 264.642 44.7205H264.649ZM263.276 44.3213C263.266 43.5765 263.056 42.9827 262.647 42.5398C262.234 42.0969 261.693 41.8722 261.017 41.8722C260.249 41.8722 259.637 42.0902 259.181 42.5163C258.721 42.9457 258.454 43.5496 258.386 44.3313L263.276 44.3246V44.3213ZM272.228 41.1609V42.4492C271.839 42.2546 271.436 42.1037 271.017 42.0064C270.601 41.9057 270.168 41.8587 269.722 41.8587C269.039 41.8587 268.528 41.9628 268.186 42.1708C267.848 42.3788 267.676 42.6874 267.676 43.1034C267.676 43.4188 267.797 43.6671 268.041 43.8449C268.284 44.0227 268.775 44.1971 269.509 44.3615L269.979 44.4655C270.953 44.6802 271.646 44.9654 272.055 45.3412C272.468 45.7169 272.671 46.2436 272.671 46.9213C272.671 47.6896 272.36 48.3002 271.747 48.7498C271.135 49.1993 270.29 49.4241 269.214 49.4241C268.768 49.4241 268.301 49.3805 267.818 49.2966C267.331 49.2094 266.82 49.0785 266.286 48.9074V47.5017C266.793 47.7634 267.29 47.958 267.784 48.0888C268.274 48.2197 268.761 48.2868 269.242 48.2868C269.887 48.2868 270.385 48.1794 270.733 47.958C271.081 47.7366 271.254 47.4279 271.254 47.0287C271.254 46.6563 271.129 46.3745 270.875 46.1765C270.625 45.9786 270.07 45.8041 269.221 45.6062L268.744 45.4955C267.899 45.2975 267.28 45.0459 266.901 44.6769C266.523 44.3112 266.333 43.8046 266.333 43.1638C266.333 42.3855 266.611 41.7849 267.168 41.3589C267.726 40.9361 268.514 40.7214 269.539 40.7214C270.05 40.7214 270.527 40.7617 270.973 40.8321C271.419 40.9059 271.832 41.0167 272.211 41.1643L272.228 41.1609Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M277.875 9.60785C277.507 9.60785 277.165 9.67495 276.847 9.80579C276.529 9.93663 276.238 10.1312 275.975 10.3929C275.711 10.6546 275.511 10.9431 275.376 11.2618C275.241 11.5805 275.173 11.9194 275.173 12.2817C275.173 12.6441 275.241 12.9796 275.376 13.2949C275.511 13.6103 275.711 13.8988 275.975 14.1605C276.238 14.4222 276.533 14.6201 276.847 14.751C277.165 14.8818 277.507 14.9489 277.875 14.9489C278.244 14.9489 278.592 14.8818 278.91 14.751C279.231 14.6201 279.522 14.4222 279.786 14.1605C280.046 13.9022 280.242 13.617 280.374 13.3016C280.506 12.9863 280.571 12.6474 280.571 12.2817C280.571 11.916 280.503 11.5671 280.371 11.2518C280.239 10.9364 280.043 10.6479 279.786 10.3895C279.522 10.1279 279.228 9.92992 278.91 9.80244C278.592 9.67159 278.247 9.6045 277.875 9.6045V9.60785ZM277.875 9.17842C278.301 9.17842 278.7 9.25558 279.069 9.40656C279.438 9.56088 279.776 9.78902 280.084 10.091C280.388 10.3963 280.618 10.7284 280.77 11.0941C280.922 11.4564 281 11.8556 281 12.2817C281 12.7078 280.926 13.097 280.77 13.4593C280.621 13.8216 280.388 14.1538 280.084 14.4591C279.779 14.7644 279.438 14.9892 279.069 15.1435C278.697 15.2978 278.301 15.375 277.875 15.375C277.449 15.375 277.05 15.2978 276.678 15.1435C276.309 14.9892 275.971 14.761 275.664 14.4591C275.356 14.1571 275.129 13.825 274.977 13.4593C274.825 13.097 274.75 12.7044 274.75 12.2817C274.75 11.859 274.825 11.4564 274.977 11.0941C275.129 10.7284 275.359 10.3963 275.664 10.091C275.968 9.78566 276.309 9.56088 276.678 9.40656C277.05 9.25558 277.446 9.17842 277.875 9.17842ZM277.76 10.9062H277.236V12.0569H277.76C278.071 12.0569 278.288 12.0133 278.413 11.9261C278.538 11.8422 278.599 11.6913 278.599 11.4833C278.599 11.2752 278.538 11.1243 278.413 11.0337C278.288 10.9465 278.071 10.9029 277.764 10.9029L277.76 10.9062ZM277.791 10.4768C278.288 10.4768 278.66 10.5606 278.903 10.725C279.147 10.8894 279.272 11.1411 279.272 11.4799C279.272 11.7181 279.198 11.916 279.052 12.0737C278.903 12.228 278.694 12.332 278.426 12.379C278.494 12.3991 278.575 12.4662 278.67 12.5736C278.765 12.681 278.876 12.8353 279.005 13.0399L279.583 13.9726H278.859L278.315 13.1003C278.146 12.8319 278.01 12.6642 277.909 12.5937C277.808 12.5233 277.679 12.4864 277.524 12.4864H277.243V13.9726H276.59V10.4835H277.794L277.791 10.4768Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>

      <div className="flex text-sm sm:text-lg lg:text-2xl 2xl:text-3xl justify-evenly items-center w-full h-full pt-2 pb-7 2xl:p-0">
        <Link href="/home" className="flex flex-col cursor-pointer">
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3, ease: "backInOut" }}>
            <p className={twMerge(pathname.includes("home") ? "font-bold" : "")}>Home</p>
            <div className={twMerge("bg-verde-destaque w-full border border-verde-destaque hidden", pathname.includes("home") ? "flex" : "")}></div>
          </motion.div>
        </Link>
        <Link href="/institucional" className="flex flex-col cursor-pointer">
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3, ease: "backInOut" }}>
            <p className={twMerge(pathname.includes("institucional") ? "font-bold" : "")}>Institucional</p>
            <div
              className={twMerge("bg-verde-destaque w-full border border-verde-destaque hidden", pathname.includes("institucional") ? "flex" : "")}
            ></div>
          </motion.div>
        </Link>
        <Link href="/servicos" className="flex flex-col cursor-pointer">
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3, ease: "backInOut" }}>
            <p className={twMerge(pathname.includes("servicos") ? "font-bold" : "")}>Serviços</p>
            <div
              className={twMerge("bg-verde-destaque w-full border border-verde-destaque hidden", pathname.includes("servicos") ? "flex" : "")}
            ></div>
          </motion.div>
        </Link>
        <Link href="/legislacoes" prefetch={true} className="flex flex-col cursor-pointer">
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3, ease: "backInOut" }}>
            <p className={twMerge(pathname.includes("legislacoes") ? "font-bold" : "")}>Legislações</p>
            <div
              className={twMerge("bg-verde-destaque w-full border border-verde-destaque hidden", pathname.includes("legislacoes") ? "flex" : "")}
            ></div>
          </motion.div>
        </Link>
        <Link href="/contato" className="flex flex-col cursor-pointer">
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3, ease: "backInOut" }}>
            <p className={twMerge(pathname.includes("contato") ? "font-bold" : "")}>Contato</p>
            <div
              className={twMerge("bg-verde-destaque w-full border border-verde-destaque hidden", pathname.includes("contato") ? "flex" : "")}
            ></div>
          </motion.div>
        </Link>
      </div>
      <div>
        <WhatsButton text="(54) 99129-0422" style="mx-0 sm:w-96 hidden 2xl:flex" />
      </div>
    </motion.nav>
  );
}
