<template>
    <div class="editor-left">
        <div v-for="item in materialList" key="item.id" class="material" @click="onClick($event, item)">
            <MaterialBlock :title="item.title"> </MaterialBlock>
        </div>
    </div>
</template>

<script setup lang="ts">
import "./EditorLeft.less";
import MaterialBlock from "../MaterialBlock/MaterialBlock.vue";
import { getMaterialDefaultProps, materialList } from "@/data"; // @路径导入ts文件报错
import { IMaterial } from "@lowcode512/shared";
import { useProjectStore} from '@/store'
import { PageElement } from "@lowcode512/shared";

const projectStore = useProjectStore();

const onClick = (e: Event, m: IMaterial) => {
    console.log("click", m)
    const ele = PageElement.create();
    ele.mId = m.id;
    ele.mVersion = m.version;
    ele.props = getMaterialDefaultProps(m)
    projectStore.addElement(ele);
    projectStore.load(m)
}

</script>

<style scoped></style>
