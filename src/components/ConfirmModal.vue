<script setup lang="ts">
const props = defineProps({
    question: {
        type: String,
        default:
            "",
    },
    title: {
        type: String,
        default: ""
    },
    confirmLabel: {
        type: String,
        default: ""
    },
    cancelLabel: {
        type: String,
        default: ""
    },
    modalType: {
        type: String,
        default: "Warning"
    },
});
const emit = defineEmits(["confirm", "cancel"]);
</script>

<template>
    <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            @click="emit('cancel')"
        ></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div
                class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            >
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div
                                :class="'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'"
                            >
                                <svg
                                    :class="'h-6 w-6 text-red-600'"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>
                            <div
                                class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                            >
                                <h3
                                    class="text-lg font-medium leading-6 text-gray-900"
                                    id="modal-title"
                                >
                                    {{ props.title }}
                                </h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">
                                        {{ props.question }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                    >
                        <button
                            @click="emit('confirm')"
                            type="button"
                            :class="'mt-3 inline-flex w-full justify-center rounded-md border  bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'"
                        >
                        {{ props.confirmLabel }}
                        </button>
                        <button
                            @click="emit('cancel')"
                            type="button"
                            :class="'inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-700  shadow-sm  focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm'"
                        >
                        {{ props.cancelLabel }}
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
