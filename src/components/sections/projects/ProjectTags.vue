<template>
    <div v-if="tags" class="project-tags-container">
        <div v-for="tag in tags.sort(tagSort)" :class="tagClasses(tag, selectedTags)" :key="tag"
            @click="selectTag(selectedTags, tag) ? 'active' : ''">
            <i :class="tag.icon"></i>
            {{ tag.title }}
        </div>
    </div>
</template>

<script setup>
defineProps({ tags: [{ icon: String, title: String }], selectedTags: Array })

const tagSort = (a, b) => {
    return a.title[0] > b.title[0] ? 1 : -1;
}

const selectTag = (selectedTags, tag) => {
    if (!selectedTags.includes(tag)) {
        selectedTags.push(tag)
    }
}
const tagClasses = (tag, selectedTags) => {
    const baseClass = "project-tag"
    if (selectedTags.includes(tag)) {
        return baseClass + " active"
    }
    else { return baseClass }
}
</script>
