class Main {
  // Find the length of element in sorted array
  public static void main(String[] args) {
    int[] arr = { 2, 4, 6, 10, 10, 10, 10, 18, 20 };
    int target = 10;

    int lo = last_occurrence(arr, target);

    int fo = first_occurrence(arr, target);

    int length_of_occurrence = lo - fo;

    System.out.println(length_of_occurrence + 1);
  }

  static int last_occurrence(int[] arr, int target) {
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
        start = res + 1;
      }
    }
    return res;
  }

  static int first_occurrence(int[] arr, int target) {
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
        end = mid - 1;
      }
    }
    return res;
  }
}
