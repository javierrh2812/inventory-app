<script>
export default {
  props: {
    label: String,
    type: {
      default: "text",
      type: String,
    },
    defaultValue: {
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    min: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <div class="w-full">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      :for="label"
    >
      {{ label }}
    </label>
    <input
      :id="label.replaceAll(' ', '_').toLowerCase()"
      :name="label"
      class="
        appearance-none
        block
        w-full
        bg-gray-200
        text-gray-700
        border border-gray-200
        rounded
        py-3
        px-4
        mb-3
        leading-tight
        focus:outline-none focus:bg-white focus:border-gray-500
      "
      :type="type"
      :value="defaultValue"
      :required="required"
      :min="min"
    />
  </div>
</template>
