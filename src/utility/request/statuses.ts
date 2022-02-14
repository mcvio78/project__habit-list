export const successStatus = (status: number | null): boolean => {
  switch (status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
    case 205:
    case 206:
      return true;
    default:
      return false;
  }
};

export const errorStatus = (status: number | null): boolean => {
  switch (status) {
    case 0:
    case 400:
    case 401:
    case 402:
    case 403:
    case 404:
    case 405:
    case 406:
    case 407:
    case 408:
    case 409:
    case 410:
    case 411:
    case 412:
    case 414:
    case 415:
    case 416:
    case 417:
    case 418:
    case 422:
    case 425:
    case 428:
    case 429:
    case 431:
    case 451:
    case 499:
    case 500:
    case 502:
    case 503:
    case 504:
    case 505:
    case 508:
    case 511:
    case 521:
    case 525:
      return true;
    default:
      return false;
  }
};
