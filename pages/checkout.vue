<template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-8">
          <div class="mb-8 font-bold text-xl">Billing Details</div>
          <a-form layout="vertical">
            <div class="grid grid-cols-2 gap-x-4">
              <a-form-item label="First Name">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="Last Name">
                <a-input></a-input>
              </a-form-item>
            </div>

            <a-form-item label="Company Name">
              <a-input></a-input>
            </a-form-item>

            <a-form-item label="Country">
              <!-- <a-select>
               
              </a-select> -->
            </a-form-item>

            <a-form-item label="Street Address">
              <a-input></a-input>
            </a-form-item>

            <a-form-item label="Town / City">
              <a-input></a-input>
            </a-form-item>
            <div class="grid grid-cols-2 gap-x-4">
              <a-form-item label="State / County">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="Postcode / ZIP">
                <a-input></a-input>
              </a-form-item>

              <a-form-item label="Phone">
                <a-input></a-input>
              </a-form-item>

              <a-form-item label="Email Address">
                <a-input></a-input>
              </a-form-item>
            </div>

            <a-form-item label="Create an account?">
              <a-checkbox></a-checkbox>
            </a-form-item>

            <div>Additional information</div>

            <a-form-item label="Order notes">
              <a-textarea
                placeholder="Notes about your order, e.g. special notes for delivery. "
              ></a-textarea>
            </a-form-item>
            <a-form-item label="Ship to a different address?">
              <a-checkbox></a-checkbox>
            </a-form-item>
          </a-form>
        </div>
        <div class="col-span-4">
          <div class="mb-8 font-bold text-xl">Your order</div>
          <a-card class="bg-gray-100 mb-8">
            <a-table></a-table>
            <div class="">
              <div class="">Shipping</div>
              <div class="">Free shipping</div>
            </div>

            <div class="">
              <div class="">Shipping</div>
              <div class="">Free shipping</div>
            </div>
          </a-card>
          <a-button type="primary" block> Place Order </a-button>
        </div>
      </div>
    </TheContainer>
  </section>
</template>
