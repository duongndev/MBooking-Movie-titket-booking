package com.duongnd.mbookingapp.ui.auth

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.duongnd.mbookingapp.R
import com.duongnd.mbookingapp.databinding.FragmentAuthChooseBinding
import com.duongnd.mbookingapp.databinding.FragmentChooseLanguageBinding

class AuthChooseFragment : Fragment() {

    private var _binding: FragmentAuthChooseBinding? = null
    private val binding get() = _binding!!


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding = FragmentAuthChooseBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.txtChooseLanguage.setOnClickListener {
            findNavController().navigate(R.id.action_authChooseFragment_to_chooseLanguageFragment)
        }

        binding.btnSignin.setOnClickListener {
            findNavController().navigate(R.id.action_authChooseFragment_to_loginFragment)
        }

        binding.btnSignup.setOnClickListener {
            findNavController().navigate(R.id.action_authChooseFragment_to_registerFragment)
        }

    }

}