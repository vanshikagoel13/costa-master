#include <array>
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

void generateSubsequences(int arr[], int index, vector<int> subarray, int n) {
   // Print the subsequences when we reach the end of recursion tree.
   if (index == n) {
      for (auto i : subarray)
         cout << i << " ";

      if (subarray.size() == 0)
         cout << "[]";
      cout << endl;
      return;
   }
   else {
      // adding the current index into the subsequence and calling the recursive function.
      subarray.push_back(arr[index]);

      generateSubsequences(arr, index + 1, subarray, n);

      // removing the added index into the subsequence.
      subarray.pop_back();

      // not adding the current element into the subsequence.
      generateSubsequences(arr, index + 1, subarray, n);
   }
}

int main() {
   int arr[] = {1, 2, 3};
   int n = sizeof(arr) / sizeof(arr[0]);
   vector<int> subarray;

   cout << "All the subsequences are: " << endl;
   generateSubsequences(arr, 0, subarray, n);
   return 0;
}