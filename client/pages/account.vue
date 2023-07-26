<template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <el-collapse v-model="activeNames" accordion>
            <el-collapse-item name="1" title="1. Edit Your Account Information">
              <el-form layout="vertical">
                <div>
                  <div class="">MY ACCOUNT INFORMATION</div>
                  <div class="">Your Personal Details</div>
                </div>
                <el-divider></el-divider>
                <div class="grid grid-cols-2 gap-x-8">
                  <el-form-item label="First Name">
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="First Name">
                    <el-input></el-input>
                  </el-form-item>
                </div>
                <el-form-item label="Email Address">
                  <el-input></el-input>
                </el-form-item>
                <div class="grid grid-cols-2 gap-x-8">
                  <el-form-item label="Email Address">
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="Fax">
                    <el-input></el-input>
                  </el-form-item>
                </div>
                <div class="flex justify-between">
                  <el-button type="text">back</el-button>
                  <el-button type="default">Continue</el-button>
                </div>
              </el-form>
            </el-collapse-item>
            <el-collapse-item name="2" title="2. Change Your Password">
              <el-form layout="vertical">
                <div>
                  <div class="">CHANGE PASSWORD</div>
                  <div class="">Your Password</div>
                </div>
                <el-divider></el-divider>

                <el-form-item label="Password">
                  <el-input></el-input>
                </el-form-item>

                <el-form-item label="Password Conform">
                  <el-input></el-input>
                </el-form-item>

                <div class="flex justify-between">
                  <el-button type="text">back</el-button>
                  <el-button type="default">Continue</el-button>
                </div>
              </el-form>
            </el-collapse-item>
            <el-collapse-item title="3. Modify Your Address Book Entries" name="3">
              <el-form layout="vertical">
                <div class="">ADDRESS BOOK ENTRIES</div>
                <el-divider></el-divider>

                <el-table></el-table>
              </el-form>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
const activeNames = ref(["1"]);
</script>
