<script>
export default {
  props: {
    label: String,
    inputType: {
      default: "text",
      type: String,
    },
    defaultValue: {
      default: "",
    },
    options: {
      type: Array,
      default: [],
    },
    required: {
      type: Boolean,
      default: false,
    },
    min: String,
  },
};
</script>
<template>
  <div class="w-full">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-state"
    >
      {{ label }}
    </label>
    <select
      class="
        block
        appearance-none
        w-full
        bg-gray-200
        border border-gray-200
        text-gray-700
        py-3
        px-4
        pr-8
        rounded
        leading-tight
        focus:outline-none focus:bg-white focus:border-gray-500
      "
      :id="label.replaceAll(' ', '_').toLowerCase()"
      :name="label"
      :required="required"
    >
      <option
        v-for="option in options"
        :value="option.key || option.id || option"
      >
        {{ option.value || option.name || option }}
      </option>
    </select>
  </div>
</template>
