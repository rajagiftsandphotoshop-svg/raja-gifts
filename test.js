import supabase from './supabaseClient.js'; 
const test = async () =
  const { data, error } = await supabase.from('your_table').select('*'); 
  console.log(data, error); 
}; 
test(); 
