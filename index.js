import { createClient } from '@supabase/supabase-js'

// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function main() {
  // 1. Insert a new product
  const { data: insertData, error: insertError } = await supabase
    .from('products')
    .insert([
      { name: 'Silver Candle Set', price: 35.25 } // <-- add your product here
    ])
    .select()

  if (insertError) {
    console.error('❌ Insert error:', insertError.message)
  } else {
    console.log('✅ Inserted product:', insertData)
  }

  // 2. Fetch all products
  const { data: products, error } = await supabase.from('products').select('*')

  if (error) {
    console.error('❌ Error:', error.message)
  } else {
    console.log('✅ Products:', products)
  }
}

main()
