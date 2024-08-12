package com.duongnd.mbookingapp.ui.auth

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.duongnd.mbookingapp.R
import com.duongnd.mbookingapp.databinding.FragmentChooseLanguageBinding
import com.google.android.material.bottomsheet.BottomSheetDialogFragment

class ChooseLanguageFragment : BottomSheetDialogFragment() {

    private var _binding: FragmentChooseLanguageBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        _binding = FragmentChooseLanguageBinding.inflate(inflater, container, false)
        return binding.root
    }

    @SuppressLint("ResourceAsColor")
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding.radioEnglish.isChecked = true
        binding.btnChooseLanguage.text = "Use English"

        binding.radioGroupChooseLanguage.setOnCheckedChangeListener { group, checkedId ->
            when (checkedId) {
                R.id.radio_english -> {
                    binding.radioEnglish.setTextColor(R.color.my_light_primary)
                    binding.radioVietnamese.setTextColor(R.color.white)
                    binding.btnChooseLanguage.text = "Use English"
                }

                R.id.radio_vietnamese -> {
                    binding.radioVietnamese.setTextColor(R.color.my_light_primary)
                    binding.radioEnglish.setTextColor(R.color.white)
                    binding.btnChooseLanguage.text = "Use Vietnamese"
                }
            }
        }

        binding.btnChooseLanguage.setOnClickListener {
            dismiss()
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}