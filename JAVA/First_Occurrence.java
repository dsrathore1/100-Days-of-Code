class Main {
  // Find the element in first occurrence
  public static void main(String[] args) {
    int[] arr = { 2, 4, 6, 10, 10, 10, 10, 10, 18, 20 };
    int target = 18;

    int bs = binarySearch(arr, target);

    System.out.println(bs);

  }

  static int binarySearch(int[] arr, int target) {
    int start = 0;
    int end = arr.length - 1;
    int res = -1;

    while (start <= end) {
      int mid = start + (end - start) / 2;

      if (target < arr[mid]) {
        end = mid - 1;
      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        res = mid;
        end = res - 1;
      }
    }

    return res;
  }
}
