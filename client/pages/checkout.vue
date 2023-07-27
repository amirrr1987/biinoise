<template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-8">
          <div class="mb-8 font-bold text-xl">Billing Details</div>
          <el-form layout="vertical">
            <div class="grid grid-cols-2 gap-x-4">
              <el-form-item label="First Name">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="Last Name">
                <el-input></el-input>
              </el-form-item>
            </div>

            <el-form-item label="Company Name">
              <el-input></el-input>
            </el-form-item>

            <el-form-item label="Country">
              <!-- <el-select>
               
              </el-select> -->
            </el-form-item>

            <el-form-item label="Street Address">
              <el-input></el-input>
            </el-form-item>

            <el-form-item label="Town / City">
              <el-input></el-input>
            </el-form-item>
            <div class="grid grid-cols-2 gap-x-4">
              <el-form-item label="State / County">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="Postcode / ZIP">
                <el-input></el-input>
              </el-form-item>

              <el-form-item label="Phone">
                <el-input></el-input>
              </el-form-item>

              <el-form-item label="Email Address">
                <el-input></el-input>
              </el-form-item>
            </div>

            <el-form-item label="Create an account?">
              <el-checkbox></el-checkbox>
            </el-form-item>

            <div>Additional information</div>

            <el-form-item label="Order notes">
              <el-input
                :rows="2"
                type="textarea"
                placeholder="Notes about your order, e.g. special notes for delivery. "
              />
            </el-form-item>
            <el-form-item label="Ship to a different address?">
              <el-checkbox></el-checkbox>
            </el-form-item>
          </el-form>
        </div>
        <div class="col-span-4">
          <div class="mb-8 font-bold text-xl">Your order</div>
          <el-card class="bg-gray-100 mb-8">
            <el-table></el-table>
            <div class="">
              <div class="">Shipping</div>
              <div class="">Free shipping</div>
            </div>

            <div class="">
              <div class="">Shipping</div>
              <div class="">Free shipping</div>
            </div>
          </el-card>
          <el-button type="primary" block> Place Order </el-button>
        </div>
      </div>
    </TheContainer>
  </section>
</template>
