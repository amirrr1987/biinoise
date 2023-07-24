<template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-12">
        <div class="col-span-7">
          <a-collapse>
            <a-collapse-panel key="1" header="1. Edit Your Account Information">
              <a-form layout="vertical">
                <div>
                  <div class="">MY ACCOUNT INFORMATION</div>
                  <div class="">Your Personal Details</div>
                </div>
                <a-divider></a-divider>
                <div class="grid grid-cols-2 gap-x-8">
                  <a-form-item label="First Name">
                    <a-input></a-input>
                  </a-form-item>
                  <a-form-item label="First Name">
                    <a-input></a-input>
                  </a-form-item>
                </div>
                <a-form-item label="Email Address">
                  <a-input></a-input>
                </a-form-item>
                <div class="grid grid-cols-2 gap-x-8">
                  <a-form-item label="Email Address">
                    <a-input></a-input>
                  </a-form-item>
                  <a-form-item label="Fax">
                    <a-input></a-input>
                  </a-form-item>
                </div>
                <div class="flex justify-between">
                  <a-button type="text">back</a-button>
                  <a-button type="default">Continue</a-button>
                </div>
              </a-form>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="2. Change Your Password">
              <a-form layout="vertical">
                <div>
                  <div class="">CHANGE PASSWORD</div>
                  <div class="">Your Password</div>
                </div>
                <a-divider></a-divider>

                <a-form-item label="Password">
                  <a-input></a-input>
                </a-form-item>

                <a-form-item label="Password Conform">
                  <a-input></a-input>
                </a-form-item>

                <div class="flex justify-between">
                  <a-button type="text">back</a-button>
                  <a-button type="default">Continue</a-button>
                </div>
              </a-form>
            </a-collapse-panel>
            <a-collapse-panel
              key="3"
              header="3. Modify Your Address Book Entries"
            >
              <a-form layout="vertical">
                <div class="">ADDRESS BOOK ENTRIES</div>
                <a-divider></a-divider>

                <a-table></a-table>
              </a-form>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </TheContainer>
  </section>
</template>
<style></style>
