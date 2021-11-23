import { reactive, onMounted } from 'vue';

function fetchData() {
  const mockData = {
    name: 'milkmidi',
    age: 18,
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
}

// export interface UseFetchDataType {
//   isLoading : boolean;
//   userData: UserData;
// }

const useFetchData = () => {
  const state = reactive({
    userData: {},
    isLoading: false,
  });
  onMounted(async () => {
    state.isLoading = true;
    const userData = await fetchData();
    state.userData = userData;
    state.isLoading = false;
  });
  return state;
};

export default useFetchData;
