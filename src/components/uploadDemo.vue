<template>
    <div>
        <form>
            <div class="img">
                <el-image class="img" :src="src"  />
            </div>
            <input type="file" ref="inputRef" name="portrait" @change="selectPortrait">
            <ElButton @click.prevent="submit">提交</ElButton>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useClientStore } from '@/pinia/stores/client';
import { ref } from '@vue/runtime-core';

const client = useClientStore().client
const src = ref('')

const inputRef = ref<HTMLInputElement>()
const formData = new FormData()
const selectPortrait = () => {
    const input = inputRef.value as HTMLInputElement

    if (!input.files) return
    console.log(input.files[0]);
}
const submit = async () => {
    const input = inputRef.value as HTMLInputElement
    const file = (input.files as FileList)[0]
    if (!file) return

    const portrait = file
    const type = portrait.type
    const arrayBuffer = await portrait.arrayBuffer()
    const uint8Array = new Uint8Array(arrayBuffer)
    const ret = await client.callApi('Login/Regist', {
        portrait: {
            fileDate: uint8Array,
            fileType: type
        }
    })
    if(ret.isSucc){
        src.value = ret.res.portrait
    }
}
</script>

<style lang="less" scoped>
.img{
    height: 300px;
    aspect-ratio: 16 / 9;
}
</style>